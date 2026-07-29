"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setState("error");
      form.reportValidity();
      return;
    }

    setState("submitting");
    window.setTimeout(() => {
      form.reset();
      setState("success");
    }, 450);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name *</span>
        <input autoComplete="name" name="name" required type="text" />
      </label>
      <div className="contact-form__grid">
        <label>
          <span>Email *</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>Phone *</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>
      </div>
      <div className="contact-form__grid">
        <label>
          <span>Location *</span>
          <input autoComplete="address-level2" name="location" required type="text" />
        </label>
        <label>
          <span>Type Of Request *</span>
          <select defaultValue="Schedule a meeting" name="requestType" required>
            <option>Schedule a meeting</option>
            <option>Contact Us</option>
            <option>Book Consultation</option>
          </select>
        </label>
      </div>
      <label>
        <span>Message *</span>
        <textarea name="message" required rows={5} />
      </label>
      <button className="contact-form__button" disabled={state === "submitting"} type="submit">
        {state === "submitting" ? "Sending" : "Submit"}
      </button>
      <div aria-live="polite" className="contact-form__status">
        {state === "success" ? "Submitted" : null}
        {state === "error" ? "All fields are required*" : null}
      </div>
    </form>
  );
}
