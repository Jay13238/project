import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact Us | Creative Cate",
  description: "Contact Us Here",
};
export { metadata };

function contact() {
  return (
    <div className="pt-[140px]">
      <h1 className="text-center text-secondary mt-8 mb-6">Contact Us Here</h1>
      <p className="text-center mx-[5rem] mb-10">
        Have questions, feedback, or just want to reach out? Feel free to get
        in touch with us using the contact form below. We value your input and
        strive to provide excellent customer service. Whether you have inquiries
        about our products, need assistance with an order, or simply want to say
        hello, we're here to help. Fill out the form, and we'll get back to you
        as soon as possible. Thank you for choosing to connect with us!
      </p>
      <div className="pb-10">
        <ContactForm />
      </div>
    </div>
  );
}

export default contact;
