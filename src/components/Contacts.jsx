import ContactForm from "../components/ContactForm";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section reveal" style={{ "--delay": "0ms" }}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Fill out the form and I will get back to you as soon as I can.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
