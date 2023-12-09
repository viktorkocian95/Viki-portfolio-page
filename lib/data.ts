import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vikiPortfolioImg from "@/public/viki-portfolio.png";
import vikiImg from "@/public/viki.jpg";

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
    name: "Projects",
    hash: "#projects",
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
    title: "Frontend Freelancer",
    location: "7 Months",
    description:
      "My journey began as a Freelance Frontend Developer, where I actively contributed to the establishment of a software company in collaboration with a startup incubator. This experience allowed me to cultivate a deep understanding of frontend technologies and laid the foundation for my venture into full-stack development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Javascript Developer",
    location: "2 years",
    description:
      "For the past two years, I had the privilege of working at Profiq, where my services were brokered to Forgerock. At Forgerock, I served as a JavaScript Software Engineer, specializing in crafting and refining Cypress tests and models in Node.js. Additionally, I tackled tickets in Vue.js, showcasing my versatility across the JavaScript ecosystem.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Mentor",
    location: "1 year",
    description:
      "One of the most fulfilling aspects of my career has been my involvement with Czechitas, where I've been actively mentoring a group of aspiring female students. In this role, I lead and mentor these students within the academy, aiming to provide support, motivation, and share my industry experience. Guiding them toward their first tech positions has become a personal mission, and I am committed to fostering diversity and inclusion within the tech community.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "my portfolio page",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: vikiPortfolioImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Git",
] as const;
