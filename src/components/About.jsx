import "./About.css";
import heroPhoto from "../assets/image/richard2.jpg";

export default function About() {
  return (
    <section className="about-section">
      <h3 className="about-title reveal" style={{ "--delay": "0ms" }}>
        About Me
      </h3>
      <div className="about-inner">
        <div className="about-image reveal" style={{ "--delay": "180ms" }}>
          <img
            src={heroPhoto}
            alt="Richard"
            loading="lazy"
            width="280"
            height="360"
          />
        </div>

        <div className="about-text">
          <p className="about-paragraph reveal" style={{ "--delay": "120ms" }}>
            I'm a backend-focused full-stack developer with a strong interest in API design,
            authentication, and scalable server-side systems.
          </p>
          <p className="about-paragraph reveal" style={{ "--delay": "240ms" }}>
            I work primarily with Node.js, Express, PostgreSQL, and RESTful APIs. On the frontend,
            I use React to build clean and responsive interfaces.
          </p>
          <p className="about-paragraph reveal" style={{ "--delay": "360ms" }}>
            I value clean architecture, readable code, and simple solutions that scale well and are
            easy to maintain. I'm currently seeking an internship or junior opportunity where I can
            learn from experienced engineers and contribute to real-world projects.
          </p>
          <div className="about-cta reveal" style={{ "--delay": "480ms" }}>
            <a
              className="about-cta-link"
              href="https://www.linkedin.com/in/richard-ochieng-990951267/"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
