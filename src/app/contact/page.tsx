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
    <div className="pt-[117px]">
      <h1 className="text-center text-secondary mt-8 mb-6">Contact Us Here</h1>
      <p className="text-center mx-[5rem] mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas porro
        incidunt inventore fugit omnis voluptatum necessitatibus magni non,
        tempore iusto dolorem laboriosam provident, vero voluptatem quod?
        Similique eveniet dicta magni.
      </p>
      <div className="pb-10">
        <ContactForm />
      </div>
    </div>
  );
}

export default contact;
