import React from "react";

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article className="py-10 mx-auto text-center ">
      <span>{icon}</span>
      <h4 className="mt-3 font-bold">{title}</h4>
      {/* <p>{text}</p> */}
    </article>
  );
};

export default SkillsCard;
