import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>(c) {new Date().getFullYear()} Richard Onyango. Built with React.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/richard-ochieng-990951267/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ochiengrichie"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
