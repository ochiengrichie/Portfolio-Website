import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    if (status.state === "sending") return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        state: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending..." });
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ state: "success", message: "Message sent. Thanks!" });
        e.target.reset();
      })
      .catch(() => {
        setStatus({
          state: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <label className="contact-field">
        <span className="contact-label">Name</span>
        <input
          name="name"
          placeholder="Your name"
          className="contact-input"
          required
        />
      </label>

      <label className="contact-field">
        <span className="contact-label">Email</span>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          className="contact-input"
          required
        />
      </label>

      <label className="contact-field">
        <span className="contact-label">Message</span>
        <textarea
          name="message"
          placeholder="Write your message here..."
          className="contact-input contact-textarea"
          required
        />
      </label>

      <button className="contact-button" type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending..." : "Send"}
      </button>
      <p className="contact-note" role="status" aria-live="polite">
        {status.message}
      </p>

    </form>
  );
}
