import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { contactUs } from "@/content/live/contactUs";

export const metadata: Metadata = {
  title: contactUs.title,
  description: contactUs.description,
  alternates: { canonical: contactUs.route },
};

export default function ContactPage() {
  return (
    <div className="contact-page contact-page--form-hero">
      <section className="contact-hero" aria-labelledby="contact-title">
        <Image alt="" fill priority sizes="100vw" src="/assets/city-consulting.jpg" />
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="container contact-hero__center">
          <h1 id="contact-title">{contactUs.name}</h1>
        </div>
      </section>

      <section className="contact-form-section" aria-label={contactUs.name}>
        <div className="container">
          <div className="contact-form-shell">
            <div className="contact-form-shell__head">
              <h2>How can we help?</h2>
              <p>All fields are required*</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
