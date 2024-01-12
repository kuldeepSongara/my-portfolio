import { Blog, ContactInfoType, NavigationInfo, Project } from "./definitions";
import { BiLogoGmail, BiLogoLinkedin, BiDownload } from "react-icons/bi";
export const ProjectsData: Project[] = [
  {
    tech: "React JS",
    name: "Intuit",
    description:
      "Platform that helps consumers/small businesses overcome their important financial challenges.",
    techStack: ["Typescript", "Jest", "Playwright", "i18next"],
    role: "Sr. Solution Engineer",
  },
  {
    tech: "React JS",
    name: "SMA | Solar technology",
    description:
      "Global specialist in photovoltaic system technology, located in Niestetal Germany",
    techStack: ["Material UI", "LazyLoading"],
    role: "Frontend Web Developer",
  },
  {
    tech: "React JS",
    name: "Cornelsen Verlag",
    description:
      "German textbook publisher that offers educational media in Germany, Austria and Switzerland",
    techStack: ["Material UI", "Phaser Js"],
    role: "Frontend Web Developer",
  },
  {
    tech: "React JS",
    name: "Continental AG",
    description:
      "Pioneering technologies and services for sustainable and connected mobility of people and their goods.",
    techStack: ["Typescript", "Material UI", "i18next"],
    role: "Frontend Web Developer",
  },
];

export const BlogsData: Blog[] = [
  {
    topic: "Javascript",
    title: "JS Proxy",
    description:
      "JavaScript Proxies are like a secret agent for your objects, allowing you to intercept and modify their operations without them ever...",
    date: "11/01/2023",
    link: "https://medium.com/@kuldeepsongaraz/javascript-proxy-explained-61fc327691c0",
    readTime: "4 min",
  },
  {
    topic: "Javascript",
    title: "Closures",
    description:
      "In JavaScript, a closure is a function that has access to the variables in its lexical scope, even when the function is executed outside of...",
    date: "09/01/2023",
    link: "https://medium.com/@kuldeepsongaraz/closures-e51c870fe626",
    readTime: "4 min",
  },
  {
    topic: "React",
    title: "Lifecycle methods",
    description:
      "In React, a class component is a type of component that is implemented using a class. Class components have a number of lifecycle methods...",
    date: "04/01/2023",
    link: "https://medium.com/@kuldeepsongaraz/lifecycle-methods-of-class-components-fdb569934aae",
    readTime: "7 min",
  },
  {
    topic: "Web Dev",
    title: "Web Developer",
    description:
      "As the internet continues to play a central role in our daily lives, the demand for skilled web developers has never been greater. If...",
    date: "03/01/2023",
    link: "https://medium.com/@kuldeepsongaraz/road-to-becoming-a-web-developer-f40b34b30ec0",
    readTime: "3 min",
  },
];

export const NavigationData: NavigationInfo[] = [
  {
    href: "#projects",
    linkName: "projects",
  },
  {
    href: "#blogs",
    linkName: "blogs",
  },
  {
    href: "#experiments",
    linkName: "experiments",
  },
  {
    href: "#contact",
    linkName: "contact",
  },
];

export const ContactInfo: ContactInfoType[] = [
  {
    Logo: BiLogoGmail,
    href: "mailto:kuldeepsongaraz@gmail.com",
    type: "Mail me",
    download: false,
  },
  {
    Logo: BiLogoLinkedin,
    href: "https://www.linkedin.com/in/kuldeep-songara",
    type: "LinkedIn",
    download: false,
  },
  {
    Logo: BiDownload,
    href: "/kuldeep_cv.pdf",
    type: "Download CV",
    download: true,
  },
];
