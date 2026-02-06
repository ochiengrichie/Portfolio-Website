import "./project.css";
export default function ProjectCard({ title, description, impact, tech, github, live, delay = "0ms" }) {
  return (
    <div
      className="project-card reveal"
      style={{ "--delay": delay }}
    >
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-impact">{impact}</p>
      <p className="project-tech">Tech Stack: {tech}</p>

      <div className="project-links">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
