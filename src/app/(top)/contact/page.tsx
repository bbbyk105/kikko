import React from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

const ContactPage = () => {
  return (
    <section className="w-full bg-black relative py-32 overflow-hidden">
      {/* 背景グラデーション効果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-70"></div>

      {/* ぼかしグロー効果 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
