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
I am a dedicated Full Stack Developer with a passion for creating robust and innovative solutions. With three years of experience in the dynamic realm of JavaScript development, I have honed my skills across various aspects of the software development lifecycle.
   </p>

      <p className="mb-3">
My journey began as a Freelance Frontend Developer, where I actively contributed to the establishment of a software company in collaboration with a startup incubator. This experience allowed me to cultivate a deep understanding of frontend technologies and laid the foundation for my venture into full-stack development.
     </p>

      <p className="mb-3">
For the past two years, I had the privilege of working at Profiq, where my services were brokered to Forgerock. At Forgerock, I served as a JavaScript Software Engineer, specializing in crafting and refining Cypress tests and models in Node.js. Additionally, I tackled tickets in Vue.js, showcasing my versatility across the JavaScript ecosystem.
      </p>

      <p className="mb-3">
One of the most fulfilling aspects of my career has been my involvement with Czechitas, where I've been actively mentoring a group of aspiring female students. In this role, I lead and mentor these students within the academy, aiming to provide support, motivation, and share my industry experience. Guiding them toward their first tech positions has become a personal mission, and I am committed to fostering diversity and inclusion within the tech community.
      </p>

      <p className="mb-3">
My professional journey reflects a commitment to continuous learning, adaptability, and a genuine passion for empowering others in the field. I look forward to bringing my unique blend of technical expertise and mentorship skills to new challenges and contributing to the growth of innovative projects.
      </p>



      <p>
        <span className="italic">Outside of coding,</span>,  I am a fitness enthusiast, finding joy in challenging workouts. I am passionate about continuous learning and staying abreast of new technologies. In my leisure time, you can find me playing the piano and indulging in my love for singing. This well-rounded approach to life fuels my creativity and keeps me energized for the exciting challenges the tech world presents.
      </p>
    </motion.section>
  );
}
