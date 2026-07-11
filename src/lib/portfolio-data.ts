import achHack1 from "@/assets/portfolio/ach-hackathon-1.jpg";
import achHack2 from "@/assets/portfolio/ach-hackathon-2.jpg";
import achYouth from "@/assets/portfolio/ach-youth-roundtable.jpg";
import projNeuro from "@/assets/portfolio/proj-neuroclass-ai.svg";
import projRobot from "@/assets/portfolio/proj-robot-ai.svg";
import projFoot from "@/assets/portfolio/proj-footguard-ai.svg";
import projRice from "@/assets/portfolio/proj-ricemill-ai.svg";
import ux1 from "@/assets/portfolio/uiux-ricemill-1.jpg";
import ux2 from "@/assets/portfolio/uiux-ricemill-2.jpg";
import ux3 from "@/assets/portfolio/uiux-ricemill-3.jpg";
import ux4 from "@/assets/portfolio/uiux-ricemill-4.jpg";
import ux5 from "@/assets/portfolio/uiux-ricemill-5.jpg";
import uxWire from "@/assets/portfolio/uiux-wireframe.jpg";
import uxPoster from "@/assets/portfolio/uiux-poster.jpg";
import uxPhotopea from "@/assets/portfolio/uiux-photopea.jpg";
import profile from "@/assets/portfolio/profile.jpg";

export const PROFILE_IMG = profile;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/rajalingam-narayanakumar-578a69348",
  resume: "https://bit.ly/4uaJShe",
  selfIntro: "https://bit.ly/4uFVgkU",
  github: "https://github.com/rajalingam",
  figma: "https://twine-pure-42838145.figma.site/",
  email: "mailto:rajggulyadhavr@gmail.com",
  phone: "tel:+919791703480",
};

export const SKILLS = [
  { name: "Python" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "UI/UX Design" },
  { name: "Figma" },
  { name: "HTML / CSS" },
  { name: "Canva" },
  { name: "Power BI" },
  { name: "MySQL" },
  { name: "Photopea" },
  { name: "Front-End" },
  { name: "MS Office" },
];

export const TIMELINE = [
  { year: "2019 — 2023", title: "Higher Secondary — School First", desc: "12th: 92% · 11th: 82% — Government Higher Secondary School, Ayyarmalai." },
  { year: "2023 — Present", title: "B.Tech AI & Data Science", desc: "Chettinad College of Engineering & Technology, Karur · CGPA 8.45 (up to 5th sem)." },
  { year: "Jul — Sep 2025", title: "MERN Stack Internship · IBM", desc: "Hands-on full-stack web development with MongoDB, Express, React, Node.js." },
  { year: "2026", title: "Pre-Final Year — Open to Opportunities", desc: "Seeking internships and full-time roles in AI / Data Science / UI-UX." },
];

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link?: string;
  linkLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "FootGuard AI",
    desc: "Deep-learning healthcare app for diabetic foot health — computer-vision foot scan with a multilingual medical chatbot assistant.",
    tags: ["Python", "Computer Vision", "Healthcare AI"],
    image: projFoot,
  },
  {
    title: "NeuroClass AI",
    desc: "Smart education focus monitor that tracks gaze, blink rate and attention in real time using deep learning.",
    tags: ["Deep Learning", "EdTech", "OpenCV"],
    image: projNeuro,
  },
  {
    title: "Autonomous Service Robot",
    desc: "Indoor service robot with autonomous navigation, obstacle avoidance and task execution.",
    tags: ["Robotics", "AI", "IoT"],
    image: projRobot,
  },
  {
    title: "Sri Rajalingam Rice Mill",
    desc: "Responsive e-commerce website UI for a traditional local business, designed end-to-end in Figma with a live interactive prototype.",
    tags: ["Figma", "UI/UX", "Prototype"],
    image: projRice,
    link: "https://twine-pure-42838145.figma.site/",
    linkLabel: "View Figma Prototype",
  },
];

export const UIUX = [
  { title: "Rice Mill — Hero Landing", image: ux1 },
  { title: "Milagai & Malli Grinding", image: ux2 },
  { title: "Why Choose Us", image: ux3 },
  { title: "Contact Section", image: ux4 },
  { title: "Product Showcase", image: ux5 },
  { title: "Figma Wireframe — Portfolio", image: uxWire },
  { title: "Brand Poster — Canva", image: uxPoster },
  { title: "School Admission Poster — Photopea", image: uxPhotopea },
];

export const ACHIEVEMENTS = [
  { title: "3rd Prize — National Hackathon", org: "VCET, Madurai", image: achHack1 },
  { title: "Tamil Nadu Government Award", org: "Centum in Computer Science", image: achHack2 },
  { title: "Runner-up — Youth Indians Round Table", org: "Accessibility & Health Talk", image: achYouth },
];
