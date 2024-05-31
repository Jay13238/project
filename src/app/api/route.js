import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
  services: "Services",
  inquiryType: "Inquiry Type",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    if (Array.isArray(val)) {
      val = val.join(", ");
    }
    return str + `${CONTACT_MESSAGE_FIELDS[key]}: ${val}\n`;
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    if (Array.isArray(val)) {
      val = val.join(", ");
    }
    return (
      str + `<p><strong>${CONTACT_MESSAGE_FIELDS[key]}:</strong> ${val}</p>`
    );
  }, "");

  return {
    text: stringData,
    html: htmlData,
  };
};

export async function POST(req) {
  console.log("API endpoint reached");

  if (req.method === "POST") {
    const data = await req.json();

    const emailContent = generateEmailContent(data);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Inquiry from ${data.name}`,
        text: emailContent.text,
        html: emailContent.html,
      });

      console.log("Email sent successfully");
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }

  console.log("Invalid request method");
  return NextResponse.json({ message: "Bad Request" }, { status: 400 });
}
