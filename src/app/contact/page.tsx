// components/Contact.tsx
"use client";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white relative px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_0%)]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10 bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          Interested in working together or just want to say hi? Reach out
          below!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:gresaudipasaribu@gmail.com"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://github.com/gresaudiapasaribu"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gres-audia-pasaribu-231b3a25a/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
