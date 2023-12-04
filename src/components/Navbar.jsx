import React from "react";
import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-gray-400">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold ">
          Portfolio<span className="text-emerald-600"></span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-slate-200 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
