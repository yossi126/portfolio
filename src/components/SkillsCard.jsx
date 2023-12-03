import React from "react";

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p>{text}</p>
    </article>
  );
};

export default SkillsCard;
