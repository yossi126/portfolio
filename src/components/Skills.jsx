import React from "react";
import SkillsCard from "./SkillsCard";
import SectionTitle from "./SectionTitle";

import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 align-element " id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
