// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/image.png";
import csprepLogo from "./assets/work_logo/image copy.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/image copy 3.png";
import npmLogo from "./assets/work_logo/image copy 2.png";
import webverLogo from "./assets/work_logo/image copy 4.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Productivity Tracker",
    description:
      "Productivity Tracker is a MERN-based productivity platform featuring task & project management, focus analytics, secure authentication (Email, Google), OTP-based password recovery, JWT authorization, and interactive dashboards.",
    image: githubdetLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Express JS",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    github:
      "https://github.com/Ashutosh-kumar-2004/Time-Analysis-and-Productivity",
    webapp: "https://time-analysis-and-productivity-q8tt.vercel.app/",
  },
  {
    id: 1,
    title: "Linux File System Simulator",
    description:
      "A powerful, web-based Linux terminal and file system simulator that brings the command-line experience to your browser. This project simulates a functional file system structure, allowing users to execute standard Linux commands, manage files, and navigate directories in a safe, virtual environment.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ashutosh-kumar-2004/Linux-Command-Simulator",
    webapp: "https://ashutosh-kumar-2004.github.io/Linux-Command-Simulator/",
  },
  // {
  //   id: 2,
  //   title: "Linux File System Simulator",
  //   description:
  //     "A powerful, web-based Linux terminal and file system simulator that brings the command-line experience to your browser. This project simulates a functional file system structure, allowing users to execute standard Linux commands, manage files, and navigate directories in a safe, virtual environment.",
  //   image: movierecLogo,
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/Ashutosh-kumar-2004/Linux-Command-Simulator",
  //   webapp: "https://ashutosh-kumar-2004.github.io/Linux-Command-Simulator/",
  // },
  {
    id: 3,
    title: "Quick Chat",
    description:
      "A lightweight, real-time chat application for learning and experimentation. quickChat provides a minimal foundation for building chat features — it can be used as a starter project, demo, or playground for real-time communication using WebSockets.",
    image: npmLogo,
    tags: ["React JS", "Node.js"],
    github: "https://github.com/Ashutosh-kumar-2004/quickChat",
    webapp: "https://quick-chat-five-drab.vercel.app",
  },
  {
    id: 4,
    title: "Eventify",
    description:
      "Built a fully responsive party planning web application with role-based user and admin dashboards to manage hotels, bookings, and customer feedback. Optimized backend logic and MySQL queries for fast, reliable performance, and designed a scalable architecture using reusable UI components and efficient server-side scripts.",
    image: taskremLogo,
    tags: ["JavaScript", "PHP", "HTML", "CSS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Ashutosh-kumar-2004/Party-Planner",
  },
  {
    id: 5,
    title: "Secure File Access System",
    description:
      "Developed a lightweight, responsive web-based file management system for admin use, enabling real-time viewing, editing, and deletion of files through a dynamic dashboard. Implemented seamless UI updates without page reloads using HTML, CSS, and vanilla JavaScript, ensuring instant visual feedback for file operations.",
    image: webverLogo,
    tags: ["HTML", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Ashutosh-kumar-2004/secure-file-access-system",
  },
];
