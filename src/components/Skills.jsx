import "./skills.css";
import cssLogo from "../assets/image/tools/CSS3_logo_and_wordmark.svg.png";
import gitIconLogo from "../assets/image/tools/git-icon-logo.svg";
import gitLogo from "../assets/image/tools/git.png";
import htmlLogo from "../assets/image/tools/html.png";
import javascriptLogo from "../assets/image/tools/javascript.png";
import nodeLogo from "../assets/image/tools/Node.js_logo.svg.png";
import expressLogo from "../assets/image/tools/our-express-js-webapp-development.webp";
import postgresLogo from "../assets/image/tools/Postgresql_elephant.svg.png";
import postmanLogo from "../assets/image/tools/Postman_(software).png";
import reactLogo from "../assets/image/tools/react.png";

export default function Skills() {
  const tools = [
    { name: "JavaScript", icon: javascriptLogo },
    { name: "React", icon: reactLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "Express", icon: expressLogo },
    { name: "PostgreSQL", icon: postgresLogo },
    { name: "Git", icon: gitLogo },
    { name: "Git (alt)", icon: gitIconLogo },
    { name: "Postman", icon: postmanLogo },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title reveal" style={{ "--delay": "0ms" }}>Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="skill-card reveal" style={{ "--delay": "120ms" }}>
              <img
                src={tool.icon}
                alt={tool.name}
                className="skill-icon reveal"
                style={{ "--delay": "200ms" }}
                loading="lazy"
                width="48"
                height="48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
