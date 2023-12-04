import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            vel voluptates provident quos nam quaerat obcaecati corrupti eius,
            ut qui esse quia hic doloremque? Saepe veniam magni ab. Aliquid, id
            qui dolor, deleniti ab quaerat veritatis natus obcaecati adipisci
            sit iusto accusantium sed, inventore ipsa ea dolorum recusandae!
            Ullam, placeat?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
