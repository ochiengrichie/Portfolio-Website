import "./Hero.css";
import heroPhoto from "../assets/image/richard.jpg";
// import linkedinIcon from "../assets/image/tools/linkedin.png";
// import gitLogo from "../assets/image/tools/GitHub-Logo.wine.svg";

const cvFileUrl = `${import.meta.env.BASE_URL}Richard%20Cv.pdf`;

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-text">
          <h2 className="hero-title">Hi, I'm Richard</h2>
          <p className="hero-subtitle">
            Backend-focused full-stack developer building scalable APIs and modern web apps.
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/richard-ochieng-990951267/" target="_blank" rel="noreferrer" className="social-link">
            {/* <img src={linkedinIcon} alt="linkedin" /> */}LinkedIn
            </a>
            <a href="https://github.com/ochiengrichie" target="_blank" rel="noreferrer" className="social-link">
            {/* <img src={gitLogo} alt="github" />*/}GitHub
            </a>
          </div>
          <div className="cv-download-button">
            <a href={cvFileUrl} download="Richard-CV.pdf" className="cv-download-link">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroPhoto} alt="my photo" className="hero-photo" />
        </div>
      </div>
    </div>
  );
}
