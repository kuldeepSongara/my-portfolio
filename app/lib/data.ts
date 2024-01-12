import { Blog, ContactInfoType, NavigationInfo, Project } from "./definitions";
import { BiLogoGmail, BiLogoLinkedin, BiDownload } from "react-icons/bi";
export const ProjectsData: Project[] = [
  {
    tech: "React JS",
    name: "Intuit",
    description:
      "Collaborated as a Senior Solution Engineer on a global technology platform catering to consumers and small businesses - Utilized ReactJS, Typescript, CSS, Redux-Saga, GraphQL, i18next, LazyLoading, Jest, and Playwright in the tech stack - Addressed intricate challenges within a complex architecture - Played a pivotal role in resolving financial challenges for consumers and small businesses.",
    techStack: ["Typescript", "Redux-Saga", "Jest", "Playwright", "i18next"],
    role: "Sr. Software Engineer",
  },
  {
    tech: "React JS",
    name: "SMA | Solar technology",
    description:
      "Successfully executed multiple projects for an electricity provider, utilizing a robust technology stack including React, Material UI, Formik, Redux with Saga middleware, i18next, etc. - Demonstrated ownership and commitment by taking charge of various features, ensuring their readiness for production. - Passionately contributed to the success of the projects, showcasing expertise in implementing cutting-edge technologies and delivering high-quality results.",
    techStack: ["Redux-Saga", "Material UI", "Formik"],
    role: "Frontend Web Developer",
  },
  {
    tech: "React JS",
    name: "Cornelsen Verlag",
    description:
      "Developed a website for 10th and 12th-grade students in collaboration with a team of two developers - Utilized React, Phaser.js, and Material UI as the tech stack - Took on the role of Feature Owner - Implemented animations based on provided designs, with a strong emphasis on physics - Successfully addressed challenges in debugging complex animation code",
    techStack: ["Material UI", "Phaser Js"],
    role: "Frontend Web Developer",
  },
  {
    tech: "React JS",
    name: "Continental AG",
    description:
      "Contributed to various projects for a renowned tire-selling brand, showcasing a passion for frontend development - Demonstrated expertise in ReactJS, CSS, Material UI, Redux, Formik, i18next, and LazyLoading - Took ownership of features at the frontend, contributing to the success of the project series - Played a crucial role in the overall project, contributing to its successful completion",
    techStack: ["Typescript", "Redux-Saga", "Material UI", "Formik", "i18next"],
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
