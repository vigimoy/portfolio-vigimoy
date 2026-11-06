"use client";
import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  BriefcaseBusiness,
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  RotateCw,
  Sparkles,
  X,
} from "lucide-react";
import { profile, projects, skills, journey, faqs } from "@/lib/content";
import { Button } from "./ui/button";

const nav = [
  ["About", "about"],
  ["Skill", "skills"],
  ["Projects", "projects"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];
function SkillIcon({ index }: { index: number }) {
  const files = [
    "skill-html.png",
    "skill-javascript.png",
    "skill-typescript.png",
  ];
  return (
    <span className={`skill-icon skill-icon-${index}`} aria-hidden="true">
      {index < files.length ? (
        <Image src={`/assets/${files[index]}`} alt="" width={40} height={40} />
      ) : index === 3 ? (
        <Atom size={32} />
      ) : index === 4 ? (
        <span>TW</span>
      ) : (
        <Github size={30} />
      )}
    </span>
  );
}
function Socials() {
  return (
    <div className="socials">
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <a
        href={profile.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <Instagram size={18} />
      </a>
      <a
        href={profile.x}
        target="_blank"
        rel="noreferrer"
        aria-label="X"
        title="X"
      >
        <span aria-hidden="true">𝕏</span>
      </a>
      <a
        href={profile.tiktok}
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        title="TikTok"
      >
        <Image
          src="/assets/tiktok.svg"
          alt=""
          width={17.0394}
          height={19.6598}
          unoptimized
        />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email Rizqi">
        <Mail size={18} />
      </a>
    </div>
  );
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.7, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
function Contact() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setError("Please enter your name and a message.");
      return;
    }
    setError("");
    setDraft(
      `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`,
    );
    setOpen(true);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell contact-grid">
        <form onSubmit={submit} className="contact-form">
          <h2>
            Let’s <em>Build Something</em>
            <br />
            Great
          </h2>
          <p>
            Got an idea, a project, or just want to connect?
            <br />
            I’m always open to a conversation.
          </p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            required
            maxLength={100}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            maxLength={254}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project"
            required
            maxLength={3000}
            rows={5}
          />
          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          <Button variant="white" type="submit">
            <Mail size={18} />
            Prepare email
          </Button>
          <small>This opens a draft in your email app for you to send.</small>
        </form>
        <div className="contact-details">
          <div>
            <h3>Let’s connect</h3>
            <p>Front-end development & creative ideas</p>
            <hr />
            <h3>Email</h3>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <hr />
            <h3>Social Media</h3>
            <Socials />
          </div>
          <a className="get-in-touch" href={`mailto:${profile.email}`}>
            GET IN TOUCH <ArrowUpRight />
          </a>
        </div>
      </div>
      <footer className="shell">
        <span>© 2026 {profile.name}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <div className="success-icon">
              <Mail size={36} />
            </div>
            <Dialog.Title>Your message is ready</Dialog.Title>
            <Dialog.Description>
              Open your email app, review the draft, and send it to Rizqi. Your
              message has not been sent yet.
            </Dialog.Description>
            <a className="button button-primary" href={draft}>
              Open email app <ArrowUpRight size={18} />
            </a>
            <p className="muted">
              You can also email{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
            </p>
            <Dialog.Close
              className="dialog-close"
              aria-label="Close message dialog"
            >
              <X />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  const journeyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [journeyEdges, setJourneyEdges] = useState({ start: true, end: false });
  function moveJourney(direction: number) {
    const track = journeyRef.current;
    if (!track) return;
    const firstCard = track.children[0] as HTMLElement;
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }
  function selectFaq(index: number) {
    const next = (index + faqs.length) % faqs.length;
    setFaq(next);
    requestAnimationFrame(() => {
      const track = faqRef.current;
      const card = track?.children[next] as HTMLElement | undefined;
      if (track && card && track.scrollWidth > track.clientWidth) {
        track.scrollTo({
          left: card.offsetLeft - track.offsetLeft,
          behavior: reduceMotion ? "instant" : "smooth",
        });
      }
    });
  }
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <main id="home">
        <header className="header">
          <a className="brand" href="#home">
            {profile.shortName}
            <span>.</span>
          </a>
          <nav aria-label="Main navigation">
            {nav.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button className="menu-trigger" aria-label="Open navigation">
                <Menu />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay navigation-overlay" />
              <Dialog.Content className="mobile-menu">
                <Dialog.Title>
                  {profile.shortName}
                  <span>.</span>
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Explore the portfolio
                </Dialog.Description>
                <nav aria-label="Mobile navigation">
                  {nav.map(([label, id]) => (
                    <a
                      href={`#${id}`}
                      key={id}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <Dialog.Close
                  className="dialog-close"
                  aria-label="Close navigation"
                >
                  <X />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </header>
        <section className="hero shell">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Hi. I’m {profile.name}</p>
            <h1>
              FRONT<span>END</span>
              <br />
              DEVELOPER
            </h1>
            <p className="hero-description">{profile.intro}</p>
            <a className="button button-primary hero-button" href="#contact">
              <Mail size={20} />
              Let’s talk
            </a>
            <a className="explore" href="#projects">
              Explore my work <ArrowDown size={14} />
            </a>
          </div>
          <motion.div
            className="badge"
            animate={{ rotate: [0, 1.3, 0, -1, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="badge-base">
              <Image
                src="/assets/9d9de.png"
                alt=""
                width={1024}
                height={1536}
                priority
              />
            </div>
            <div className="badge-identity">
              <span>FRONT-END DEVELOPER</span>
              <strong>
                Muhamad
                <br />
                Rizqi Akbar<span>.</span>
              </strong>
            </div>
            <div className="badge-photo">
              <Image
                src="/assets/foto-1.jpeg"
                alt="Portrait of Muhamad Rizqi Akbar"
                fill
                priority
                sizes="(max-width: 700px) 252px, 341px"
              />
            </div>
          </motion.div>
        </section>
        <div
          className="marquee"
          aria-label="Front-end development, responsive interfaces, React and Next.js"
        >
          <div>
            {[0, 1].map((copy) => (
              <span
                className="marquee-copy"
                key={copy}
                aria-hidden={copy === 1}
              >
                {[
                  "Front-end Development",
                  "Responsive Design",
                  "React & Next.js",
                  "Figma to Code",
                ].map((text) => (
                  <span key={text}>
                    {text}
                    <Sparkles aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <section id="about" className="shell section about">
          <div className="about-heading">
            <h2>
              I turn ideas and designs into functional, accessible websites,
              <br />
              <em>one thoughtful detail at a time.</em>
            </h2>
            <div className="about-side">
              <span className="muted">About Me</span>
              <Socials />
            </div>
          </div>
          <div className="about-grid">
            <div className="about-photo">
              <Image
                src="/assets/foto-2.jpeg"
                alt="Muhamad Rizqi Akbar"
                fill
                sizes="(max-width: 700px) 100vw, 450px"
              />
              <div className="photo-caption">
                <span>Always learning.</span>
                <span>Always building.</span>
              </div>
            </div>
            <div className="services">
              {[
                {
                  icon: "service-code.svg",
                  width: 40,
                  height: 40,
                  title: "Frontend Development",
                  text: "I build responsive websites with React, Next.js, and TypeScript, bringing designs to life in the browser.",
                },
                {
                  icon: "service-web.svg",
                  width: 40,
                  height: 40,
                  title: "API Integration",
                  text: "I connect interfaces to REST APIs and handle loading, empty, and error states throughout the experience.",
                },
                {
                  icon: "service-components.svg",
                  width: 33.2839,
                  height: 36.3315,
                  title: "Component Based UI",
                  text: "I create reusable components that keep layouts consistent and make application code easier to maintain.",
                },
                {
                  icon: "service-mobile.svg",
                  width: 40,
                  height: 40,
                  title: "Responsive Design",
                  text: "I adapt layouts across screen sizes, paying attention to spacing, typography, and touch interactions.",
                },
              ].map(({ icon, width, height, title, text }) => (
                <Reveal key={title}>
                  <div className="service-icon">
                    <Image
                      src={`/assets/${icon}`}
                      alt=""
                      width={width}
                      height={height}
                      unoptimized
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="shell section skills">
          <div className="skills-intro">
            <h2>
              Tools I Use to <br />
              Build
            </h2>
            <p>
              From a first layout to a working application.
              <br />
              These are the tools I build with.
            </p>
            <a className="button button-primary" href="#contact">
              <Mail size={18} />
              Send a message
            </a>
          </div>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div className="skill-row" key={skill.name}>
                <SkillIcon index={i} />
                <div>
                  <h3>{skill.name}</h3>
                  <p className="sr-only">{skill.detail}</p>
                </div>
                <span className="skill-status">In use</span>
              </div>
            ))}
          </div>
        </section>
        <section className="approach section">
          <div className="shell">
            <div className="section-title">
              <h2>Thoughtful Design. Practical Development.</h2>
              <p>I care about how it looks, how it works, and how it feels.</p>
            </div>
            <div className="approach-table">
              <table>
                <caption className="sr-only">
                  The focus and purpose of my development approach
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Focus</th>
                    <th scope="col">My approach</th>
                    <th scope="col">Keep refining</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Design details", "Visual consistency"],
                    ["Responsive interfaces", "Every screen size"],
                    ["TypeScript", "Clear data structures"],
                    ["Reusable code", "Easier maintenance"],
                    ["API integration", "Useful loading states"],
                    ["Form validation", "Clear input feedback"],
                    ["Continuous learning", "Ongoing improvement"],
                  ].map(([title, detail]) => (
                    <tr key={title}>
                      <th scope="row">{title}</th>
                      <td>
                        <Check size={24} aria-hidden="true" />
                        <span className="sr-only">Included</span>
                      </td>
                      <td title={detail}>
                        <RotateCw size={24} aria-hidden="true" />
                        <span className="sr-only">
                          Continuing to improve: {detail}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="projects" className="shell section">
          <div className="section-title">
            <h2>Bridging Design and Development</h2>
            <p>Selected projects from my journey into front-end development.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a
                  href={project.demo ?? project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="project-art"
                  aria-label={`View ${project.name} ${project.demo ? "live demo" : "repository"}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1000px) 45vw, 380px"
                    className="project-screenshot"
                  />
                  <span className="project-open" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
                <div className="project-heading">
                  <h3>
                    <a href={project.demo ?? project.repository} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                </div>
                <p className="project-category">2026</p>
                <details className="project-details">
                  <summary>Project details</summary>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">
                      <Github size={16} /> View repository
                    </a>
                    {project.demo && (
                      <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                        Live demo <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
        <section className="shell section journey">
          <h2>My Journey in Tech</h2>
          <p>
            From foundational skills to applications built around real user
            flows.
          </p>
          <div
            className="journey-track"
            ref={journeyRef}
            onScroll={(event) => {
              const track = event.currentTarget;
              const start = track.scrollLeft <= 2;
              const end =
                track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
              setJourneyEdges((previous) =>
                previous.start === start && previous.end === end
                  ? previous
                  : { start, end },
              );
            }}
          >
            {journey.map((item) => (
              <article key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <BriefcaseBusiness size={20} />
                </div>
                <span>{item.period}</span>
                <hr />
                <p>{item.text}</p>
                <strong>{item.label}</strong>
              </article>
            ))}
          </div>
          <div className="track-controls">
            <Button
              variant="secondary"
              aria-label="Previous experience"
              onClick={() => moveJourney(-1)}
              disabled={journeyEdges.start}
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              aria-label="Next experience"
              onClick={() => moveJourney(1)}
              disabled={journeyEdges.end}
            >
              Next
            </Button>
          </div>
        </section>
        <section className="shell section learning">
          <div className="section-title">
            <h2>Built Through Practice</h2>
            <p>The habits I’m developing with every project.</p>
          </div>
          <div className="learning-grid">
            <article className="learning-feature">
              <span className="learning-label">MY APPROACH</span>
              <h3>From a design<br />to a working app.</h3>
              <p>
                I learn by building complete interfaces: translating the design,
                connecting the data, and improving the experience on every screen.
              </p>
              <ol className="learning-steps" aria-label="My development process">
                <li><span>01</span> Understand the design</li>
                <li><span>02</span> Build the interactions</li>
                <li><span>03</span> Test and refine</li>
              </ol>
              <a className="text-link" href="#projects">Explore my projects <ArrowUpRight size={16} /></a>
            </article>
            <article>
              <span className="learning-label">01 / DESIGN</span>
              <h3>Start with the details</h3>
              <p>
                Break down the Figma layout into reusable components, paying
                attention to spacing, typography, and how the page adapts to smaller screens.
              </p>
              <span className="learning-footer">Figma · Components · Responsive layouts</span>
            </article>
            <article>
              <span className="learning-label">02 / BUILD</span>
              <h3>Make it work</h3>
              <p>
                Connect the interface to APIs and state. Handle forms, loading,
                empty results, and errors as part of the experience.
              </p>
              <span className="learning-footer">React · TypeScript · REST APIs</span>
            </article>
            <article>
              <span className="learning-label">03 / REFINE</span>
              <h3>Check. Adjust. Repeat.</h3>
              <p>
                Walk through the main user flows, check different screen sizes,
                and use feedback to improve the next version.
              </p>
              <span className="learning-footer">Testing · Feedback · Iteration</span>
            </article>
          </div>
        </section>
        <section id="faq" className="shell section faq">
          <div className="faq-heading">
            <div>
              <h2>Still Got Questions?</h2>
              <p>A little more about my work and how to connect.</p>
            </div>
            <div className="track-controls">
              <Button
                variant="secondary"
                aria-label="Previous question"
                onClick={() => selectFaq(faq - 1)}
              >
                Prev
              </Button>
              <Button
                variant="secondary"
                aria-label="Next question"
                onClick={() => selectFaq(faq + 1)}
              >
                Next
              </Button>
            </div>
          </div>
          <div className="faq-track" ref={faqRef}>
            {faqs.map((item, i) => (
              <button
                key={item.question}
                className={`faq-card ${faq === i ? "active" : ""}`}
                onClick={() => selectFaq(i)}
                aria-expanded={faq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <div className="faq-card-top">
                  <Image
                    src="/assets/message.svg"
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                  />
                </div>
                <div>
                  <h3>{item.question}</h3>
                  <p id={`faq-answer-${i}`} hidden={faq !== i}>
                    {item.answer}
                  </p>
                </div>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </section>
        <Contact />
      </main>
    </MotionConfig>
  );
}
