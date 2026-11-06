export const profile = {
  name: "Muhamad Rizqi Akbar",
  shortName: "Vigimoy",
  email: "muhamadrizqiakbar2009@gmail.com",
  github: "https://github.com/vigimoy",
  linkedin: "https://www.linkedin.com/in/muhamad-rizqi-akbar-6071633b8/",
  instagram: "https://www.instagram.com/vigimoy_/",
  x: "https://x.com/ard_rizqiakbar",
  tiktok: "https://www.tiktok.com/@vigimoy_",
  intro:
    "I turn designs into responsive, interactive websites. Building with React, Next.js, and TypeScript, I bring attention to detail to every interface I create.",
};
type Project = {
  name: string;
  category: string;
  description: string;
  repository: string;
  demo?: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Movie Explorer",
    category: "Bootcamp project · 2026",
    description:
      "A movie discovery app powered by TMDB, with search, movie details, trending titles, and a personal favorites list.",
    repository: "https://github.com/vigimoy/week-9-movie-explorer-app-vigimoy",
    demo: "https://movie-explorer-vigimoy.vercel.app",
    image: "/assets/projects/movie-explorer.webp",
    imageAlt: "Movie Explorer home page with a featured movie and trending titles",
    tags: ["React", "TypeScript", "TanStack Query"],
  },
  {
    name: "Foody",
    category: "Restaurant application · 2026",
    description:
      "A responsive food-ordering experience with restaurant discovery, menu details, a shopping cart, checkout, and order history.",
    repository: "https://github.com/vigimoy/week-10-restaurant-app-vigimoy",
    demo: "https://foody-vigimoy.vercel.app",
    image: "/assets/projects/foody.webp",
    imageAlt: "Foody home page with restaurant search, categories, and recommendations",
    tags: ["Next.js", "TypeScript", "TanStack Query"],
  },
  {
    name: "Sociality",
    category: "Social application · 2026",
    description:
      "A photo-sharing application with profiles, feeds, likes, comments, and saved posts. Built with a responsive interface and API integration.",
    repository: "https://github.com/vigimoy/sociality",
    demo: "https://sociality-vigimoy.vercel.app",
    image: "/assets/projects/sociality.webp",
    imageAlt: "Sociality public profile page showing a photo gallery and profile navigation",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
];
export const skills = [
  {
    name: "HTML & CSS",
    detail: "Semantic markup and responsive layouts",
  },
  {
    name: "JavaScript",
    detail: "Interactive interfaces and asynchronous logic",
  },
  {
    name: "TypeScript",
    detail: "Typed data and reusable application logic",
  },
  {
    name: "React & Next.js",
    detail: "Components, routing, and web applications",
  },
  {
    name: "Tailwind CSS",
    detail: "Consistent styling across screen sizes",
  },
  {
    name: "Git & GitHub",
    detail: "Version control and project collaboration",
  },
];
export const journey = [
  {
    title: "Building the foundations",
    period: "June – July 2026",
    text: "Started with HTML, CSS, and Git. Turned Figma layouts into responsive landing pages, then explored Tailwind CSS and JavaScript.",
    label: "HTML / CSS / JavaScript",
  },
  {
    title: "Thinking in components",
    period: "August – September 2026",
    text: "Practiced TypeScript, React components, hooks, and state management. Developed stronger habits around reusable UI and typed data.",
    label: "TypeScript / React",
  },
  {
    title: "Connecting real applications",
    period: "September – October 2026",
    text: "Worked on bootcamp applications with Next.js, API integration, forms, and server state. Continued refining desktop and mobile interfaces.",
    label: "Next.js / REST APIs",
  },
];
export const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I use HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS. My projects also include API integration and form validation.",
  },
  {
    question: "Can you turn a Figma design into a website?",
    answer:
      "Yes. My bootcamp work includes translating Figma designs into responsive interfaces, with attention to typography, spacing, and component states.",
  },
  {
    question: "What kind of role are you looking for?",
    answer:
      "I am working toward a front-end developer role where I can contribute to useful interfaces and continue growing through feedback and collaboration.",
  },
  {
    question: "Where can I see your code?",
    answer:
      "You can explore my public repositories on GitHub. Each project card includes a link to its source code, and a live demo where available.",
  },
  {
    question: "How can we get in touch?",
    answer:
      "You can email me or connect with me on LinkedIn. Use the contact form below to prepare an email with your message.",
  },
];
