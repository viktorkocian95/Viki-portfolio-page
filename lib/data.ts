import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vikiPortfolioImg from "@/public/viki-portfolio.png";
import vikiImg from "@/public/viki.jpg";
import nodeAPIImg from "@/public/node-api.png";

export const portfolioImg = {imageUrl: vikiImg}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack developer - Roier",
    location: "since 2024",
    description:
        "Roier – A FinTech Investment Application. As part of the innovative team at Roier, my role is pivotal in developing a seamless user experience for this cutting-edge FinTech investment app. My daily responsibilities oscillate between full-stack tasks, with a significant focus on enhancing the frontend landscape. Utilizing a modern tech stack, I leverage Next.js and Nest.js to create robust and scalable applications, with Prisma and PostgreSQL managing our relational data effectively, while MongoDB supports our needs for NoSQL data operations. My goal is to contribute to the simplification of investment processes, ensuring that Roier stands out in the digital finance realm.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Mentor - Czechitas",
    location: "1 year",
    description:
        "At Czechitas, I actively mentored a group of aspiring female students, leading them within the academy. I aimed to provide support, motivation, and share my industry experience, guiding them toward their first tech positions. This role has been one of the most fulfilling aspects of my career, and I am committed to fostering diversity and inclusion within the tech community.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Javascript Developer - Forgerock",
    location: "2 years",
    description:
      "In my role at Forgerock, I served as a JavaScript Software Engineer, specializing in crafting and refining Cypress tests and models in Node.js. Additionally, I tackled tickets in Vue.js, showcasing my versatility across the JavaScript ecosystem.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Frontend Freelancer",
    location: "7 Months",
    description:
        "Embarking as a Freelance Frontend Developer, I played a pivotal role in establishing a software company through collaboration with a startup incubator. This experience deepened my understanding of frontend technologies and laid the foundation for my transition into full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },

] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "my portfolio page",
    tags: ["React", "Next.js", "Tailwind", "FramerMotion"],
    imageUrl: vikiPortfolioImg,
    githubUrl: "https://github.com/viktorkocian95/Viki-portfolio-page"
  },
  {
    title: "Node API",
    description:
      "Node.js api with authentification (in progress)",
    tags: ["Node", "Prisma", "PostgreSQL"],
    imageUrl: nodeAPIImg,
    githubUrl: "https://github.com/viktorkocian95/node-api"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Context API",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Cypress",
  "Git",
  "Mentoring",
  "Problem-Solving",
  "Effective Communication",
  "Adaptability"
] as const;
