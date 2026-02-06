# Richard Onyango — Portfolio Website

A modern, responsive single-page portfolio website built with React and Vite, designed to present my background, projects, and technical skills. The project emphasizes clean structure, accessibility, and real-world frontend best practices.

🔗 Live Demo: (add link)  
🔗 GitHub: https://github.com/ochiengrichie

## Why This Project Matters

This portfolio was built to demonstrate:

- Practical React fundamentals (component structure, hooks, state)
- Clean project organization suitable for team environments
- Attention to accessibility and user experience
- Ability to deploy and maintain a production-ready frontend project

Rather than relying on UI libraries, the project focuses on core frontend principles that translate directly to real-world work.

## Features

- Single-page layout with anchored sections: Hero, About, Projects, Skills, Contact
- Scroll-based reveal animations using the Intersection Observer API
- Fully responsive design (desktop & mobile)
- Contact form with real email delivery using EmailJS
- Clear success/error feedback for form submissions
- External links to GitHub and LinkedIn profiles

## Tech Stack

- React 19 – component-based UI development
- Vite (rolldown-vite) – fast development and optimized production builds
- CSS – custom styling without UI frameworks
- EmailJS – client-side form submission without a backend

## Design Decisions & Learning Outcomes

Intersection Observer over scroll listeners  
Chosen to improve performance and avoid unnecessary re-renders on scroll events.

Single-page architecture  
Reduces navigation complexity while keeping content easily accessible.

Client-side email handling  
EmailJS was used to simplify deployment while understanding its security trade-offs for non-sensitive forms.

Accessibility-first approach  
Semantic HTML, labeled form fields, keyboard navigation, and aria-live feedback were included to meet real-world frontend standards.

This project strengthened my understanding of React hooks, component separation, environment configuration, and frontend deployment workflows.

## Project Structure

```text
my-portfolio-website/
  public/
  src/
    assets/
    components/
      About.jsx
      ContactForm.jsx
      Contacts.jsx
      Footer.jsx
      Hero.jsx
      Navbar.jsx
      ProjectCard.jsx
      Projects.jsx
      Skills.jsx
    hooks/
      useRevealOnScroll.js
    App.jsx
    App.css
    index.css
    main.jsx
  index.html
  eslint.config.js
  package.json
  vite.config.js
```

The structure mirrors real production projects, separating UI components, custom hooks, and global styles for maintainability.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

```text
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Note: `VITE_*` variables are exposed to the client. No sensitive secrets are stored.

## Deployment

This project can be deployed on any static hosting platform such as Vercel, Netlify, or GitHub Pages.

Typical flow:
1. Install dependencies
2. Set environment variables
3. Run `npm run build`
4. Deploy the `dist/` output

If deploying to a sub-path, set the `base` option in `vite.config.js`.

## Accessibility

- Semantic HTML elements
- Labeled form inputs
- Keyboard-accessible navigation
- `aria-live` feedback for form submission status

## How This Fits My Profile

This portfolio complements my other projects, including a real-time collaborative editor, and reflects my focus on:

- Frontend fundamentals
- Clean, maintainable code
- Real-world developer workflows
- Continuous learning and improvement

I am currently seeking junior frontend or full-stack internship roles, particularly remote opportunities where I can grow under experienced teams.

## License

MIT

## Contact

- LinkedIn: https://www.linkedin.com/in/richard-ochieng-990951267/
- GitHub: https://github.com/ochiengrichie
- Email: ochiengrichie24@gmail.com
