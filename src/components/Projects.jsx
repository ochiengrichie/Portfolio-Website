import ProjectCard from "../components/ProjectCard";
import "./project.css";

export default function Projects() {
  const projects = [
    {
      title: "Notes App",
      description: "Full-stack notes app with CRUD operations.",
      impact: "A full-stack note-taking application with secure user authentication, real-time search, and industry-level security practices..",
      tech: "React, Node.js, Express, PostgreSQL,CSS, HTML",
      github: "https://github.com/ochiengrichie/Notes-Fullstack-App",
      live: "https://notes-fullstack-app-git-main-richards-projects-c1649e52.vercel.app/",
    },
    {
      title: "Collaborative Editor",
      description: "Real-time collaborative document editing platform.",
      impact: "A full-stack collaborative editor that allows multiple users to edit documents simultaneously with live updates, role-based access control, and secure authentication. The project focuses on real-time synchronization and scalable backend architecture.",
      tech: "React, Node.js, Express, PostgreSQL, WebSockets, CSS, HTML",
      github: "https://github.com/ochiengrichie/collab-editor",
      live: "In Development"
    },

    {
      title: "AI Receptionist (In Development)",
      description: "AI voice assistant that handles conversations with users.",
      impact: "An AI-powered voice receptionist capable of receiving audio input, transcribing speech to text, generating intelligent responses using large language models, and replying through text-to-speech. The system simulates how modern voice assistants and AI call agents operate.",
      tech: "React, Node.js, Express, Ollama, Speech-to-Text, Text-to-Speech, CSS, HTML",
      github: "https://github.com/ochiengrichie/AI-Receptionist",
      live: "In Development"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title reveal" style={{ "--delay": "0ms" }}>
          Projects
        </h2>

        <p className="projects-subtitle reveal" style={{ "--delay": "120ms" }}>
          Some things I've built recently.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              impact={p.impact}
              tech={p.tech}
              github={p.github}
              live={p.live}
              delay={`${200 + i * 120}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
