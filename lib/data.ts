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
      title: "Frontend Developer - Medical System a.s.",
      location: "1 year",
      description:
          "At Medical System a.s. for one year, I worked primarily as a Frontend Developer using Vue.js and Nuxt to build robust UIs, while supporting QA with automated tests and mentoring. I also contributed to the DevOps transition by setting up CI/CD pipelines for on-premise and OCI cloud deployments, including Dockerizing projects, orchestrating deployments with Kubernetes and Kustomize, and managing GitLab pipelines and container registries.",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - 2025",
    },
    {
    title: "Fullstack Developer - Roier",
    location: "Few months",
    description:
        "At Roier, a FinTech Investment App, I developed a seamless user experience by tackling both frontend and backend tasks. Using Next.js, Nest.js, Prisma, PostgreSQL, and MongoDB, I contributed to building scalable applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Mentor - Czechitas",
    location: "3 years",
    description:
        "At Czechitas, I mentored aspiring female students, providing support, motivation, and industry insights to help them land their first tech roles, while fostering diversity and inclusion.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Javascript Developer - Forgerock",
    location: "2 years",
    description:
        "At Forgerock, I worked as a JavaScript Engineer, focusing on Cypress test automation, developing Node.js models, and handling Vue.js tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Frontend Freelancer",
    location: "7 Months",
    description:
        "As a Freelance Frontend Developer, I helped establish a software company with a startup incubator, deepening my skills in frontend development and laying the foundation for full-stack growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  }
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
  "Vue.js",
  "Nuxt.js",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Cypress",
  "Git",
  "Docker",
  "Deployment",
  "Kubernetes",
  "OCI",
  "Kustomize",
  "Keycloak (basic)",
  "Mentoring",
  "Problem-Solving",
  "Effective Communication",
  "Adaptability"
] as const;
