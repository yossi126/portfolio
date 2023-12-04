import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About" />
          <p className="text-slate-600 mt-8 leading-loose">
            {" "}
            I am a software developer with experience in server-side
            technologies such as Node.js, Express, MongoDB, Firebase and SQL,
            well versed in REST API development and CRUD operations. On the
            client side, I work with React, Redux, HTML and CSS, often combining
            libraries like Bootstrap and MUI to create user-friendly interfaces.
            Enjoys exploring and experimenting with new technologies.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
