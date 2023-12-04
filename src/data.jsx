import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava, FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiReact } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-gray-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-yellow-300" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Express",
    icon: <SiExpress className="h-16 w-16 text-gray-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-green-900" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: <SiFirebase className="h-16 w-16 text-yellow-700" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-violet-600" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://github.com/yossi126/react-store",
    github: "https://github.com/yossi126/react-store",
    title: "React & express store",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://github.com/yossi126/express-graphql",
    github: "https://github.com/yossi126/express-graphql",
    title: "Shift management - express & graphql",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://github.com/yossi126/django-react-notes-app",
    github: "https://github.com/yossi126/django-react-notes-appa",
    title: "notes app - django & react",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://github.com/yossi126/django-react-notes-app",
    github: "https://github.com/yossi126/RUNNER",
    title: "notes app - django & react",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
