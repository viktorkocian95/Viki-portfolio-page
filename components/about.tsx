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
        I'm Viktor – a Frontend Developer with 3 years of experience, passionate about crafting engaging user interfaces with Vue.js and Nuxt. I've embraced diverse challenges across team projects and roles, gaining robust skills in QA automation alongside frontend development. I also bring experience with React, full-stack development, and a foundational understanding of DevOps. I actively mentor through Czechitas, contributing to a more diverse and innovative tech community.
      </p>

      <p>
        <span className="italic">Outside of work,</span> I'm into fitness, playing the piano, musical theater singing, and martial arts – all of which keep my creative and disciplined sides well-balanced.
      </p>
    </motion.section>
  );
}
