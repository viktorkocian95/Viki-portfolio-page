"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
      {/*I am a dedicated Full Stack Developer with three years of experience in JavaScript development. From freelancing and contributing to a startup, I transitioned to a role at Profiq, where my services were brokered to Forgerock. Specializing in Cypress tests and Node.js models, I also worked on Vue.js tickets, showcasing versatility in the JavaScript ecosystem. Actively mentoring aspiring female students at Czechitas, I lead and support them in their tech journeys, emphasizing diversity and inclusion. My commitment to continuous learning and adaptability is reflected in my professional journey, where I bring a unique blend of technical expertise and mentorship skills.*/}
      {/*    As a Full Stack Developer with three years of experience, my journey in JavaScript development spans from freelancing to impactful roles . I'm dedicated to mentoring through Czechitas, promoting diversity in tech. My pursuit of excellence is fueled by continuous learning and a balance of technical and leadership skills.*/}
        I'm Viktor – a Frontend Developer with 3 years of experience focused on building engaging UIs with Vue.js and Nuxt. I've worn many hats, from working as a freelancer to taking on solid team roles, and I'm also familiar with React. Along the way, I've picked up full-stack skills with Node.js and gained hands-on experience in QA and bit of DevOps. I've also actively mentored through Czechitas, helping to promote diversity in tech.
      </p>

      <p>
        <span className="italic">Outside of work,</span> I'm into fitness, playing the piano, musical theater singing, and martial arts – all of which keep my creative and disciplined sides well-balanced.
      </p>
    </motion.section>
  );
}
