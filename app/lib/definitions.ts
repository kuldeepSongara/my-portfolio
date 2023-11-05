import { IconType } from "react-icons";

export type Project = {
  tech: string;
  name: string;
  description: string;
  techStack: string[];
  role: string;
};

export type Blog = {
  topic: string;
  title: string;
  description: string;
  date: string;
  link: string;
  readTime: string;
};

export type NavigationInfo = {
  href: string;
  linkName: string;
};

export type ContactInfoType = {
  Logo: IconType;
  href: string;
  type: string;
};
