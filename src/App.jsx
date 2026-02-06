import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contacts.jsx";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

export default function App() {
  useRevealOnScroll({selector: ".reveal", once: true});
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <section id="home" className="section-block"><Hero /></section>
        <section id="about" className="section-block"><About /></section>
        <section id="projects" className="section-block"><Projects /></section>
        <section id="skills" className="section-block"><Skills /></section>
        <section id="contact" className="section-block"><Contact /></section>
      </main><hr style={{ "width":"100%"}}/>
      <Footer />
    </div>
  );
}
