// --- PROJECT IMAGE ---
import smartcurriculum from '../assets/images/SmartCurriculum.png'
import restaurant from '../assets/images/Restaurant.png'
import Dialect from '../assets/images/DialectTrainerBot.png'
import cloud from '../assets/images/cloudComputing.png'
import binary from '../assets/images/BinaryBlitz.jpeg'
import live from '../assets/images/LiveProcessMointoring.png'
import health from '../assets/images/HealthandWellnes.png'
import freecodecamp from '../assets/images/freecodecamp palak.png'
import java from '../assets/images/JAVA.png'
import c from '../assets/images/PalakCsePathshala.jpeg'
import oops from '../assets/images/OPPSC++.png'
import dsa from '../assets/images/DSA.png'
import ai from '../assets/images/AiAgentHackthon.png'
import indexedDB from '../assets/images/IndexingMongodb.png'
import Masterai from '../assets/images/MasterGenerativeAi.png'
import Crud from '../assets/images/CrudMongodb.png'
import computationalTheory from '../assets/images/ComputationalTheory.png'
import { MessageCircle, Users, Brain, Star, Clock } from "lucide-react";

export const skillCategories = ["All", "Languages", "Frameworks", "Tools", "Databases", "Backend", "Soft Skills"];

export const skills = [
  { name: "C++", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "ReactJs", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  // { name: "Github", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", fill: "emerald-400" },
  { name: "GitHub", category: "Tools", fill: "emerald-400"},
  { name: "MySQL", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "NodeJs", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Communication", category: "Soft Skills", icon: MessageCircle },
  { name: "Teamwork", category: "Soft Skills", icon: Users },
  { name: "Problem Solving", category: "Soft Skills", icon: Brain },
  { name: "Leadership", category: "Soft Skills", icon: Star },
  { name: "Time Management", category: "Soft Skills", icon: Clock }
];

// --- PROJECT CATEGORIES ---
export const projectCategories = ["All", "Python", "Web Development"];

// --- PROJECTS DATA ---
export const projects = [
  {
    name: "Smart Curriculum and Attendance App",
    description: "The Smart Curriculum Attendance App is a modern digital platform designed to simplify curriculum management and student attendance tracking for educational institutions.",
    tags: ["React", "Tailwind", "NodeJs", "MongoDB"],
    category: "Web Development",
    image: smartcurriculum, 
    github: "https://github.com/Palak85/Smart_Curriculum_Attendance_App",
    live: "https://student-management-system-main-two.vercel.app/admin-dashboard"
  },
  {
    name: "The Restaurant Order Management System",
    description: "A web application to reserve tables and manage orders online with a user-friendly interface.",
    tags: ["PHP", "MySQL", "CSS", "HTML", "JavaScript", "Tailwind"],
    category: "Web Development",
    image: restaurant,
    github: "https://github.com/Palak85/The-Restaurant-Order-Management-System?tab=readme-ov-file",
    live: "https://aquamarine-frangipane-6ec647.netlify.app/" 
  },
  {
    name: "Dialect Trainer Bot",
    description: "A web-based language learning application that helps users improve their pronunciation in multiple languages using speech recognition technology.",
    tags: ["Python", "HTML", "CSS", "Javascript"],
    category: "Python",
    image: Dialect,
    github: "https://github.com/Palak85/Dialect-Trainer-Bot",
    live: "https://dialect-trainer-bot.vercel.app/"
  },
  {
    name: "Live Process Monitoring System",
    description: "A real-time process monitoring system that provides insights into system performance, resource usage, and process management.",
    tags: ["Python", "Flask"],
    category: "Python",
    image: live,
    github: "https://github.com/ankitgithub12/Live-process-monitoring-Dashboard"
  },
  {
    name: "Health and wellness Tracker",
    description: "A web application for tracking health and wellness metrics.",
    tags: ["HTML","CSS"],
    category: "Web Development",
    image: health,
    github: "https://github.com/Palak85/Health-and-Wellness-Tracker",
  }
];
export const certificatesCategories = ["All", "Hackthon", "Programming", "Web Development", "others"];
export const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "Programming",
    pdf: "/certs/Cloud Computing.pdf",
    image: cloud
  },
  {
    title: "Binary Blitz Hackthon",
    issuer: "Binary Blitz",
    category: "Hackthon",
    pdf: "/certs/BinaryBlitz.pdf",
    image: binary
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    category: "Web Development",
    pdf: "/certs/palak freecodecamp certificate.pdf",
    image: freecodecamp
  },
  {
    title: "JAVA Certificate",
    issuer: "Coding Platform",
    category: "Programming",
    pdf: "/certs/java_Palak.pdf",
    image: java
  },
  {
    title: "C Programming Language",
    issuer: "CSE Pathshala",
    category: "Programming",
    pdf: "/certs/PalakCsePathshala.pdf",
    image: c
  },
  {
    title: "C++ Certificate",
    issuer: "Coding Platform",
    category: "Programming",
    pdf: "/certs/PalakOOPS.pdf",
    image: oops
  },
  {
    title: "DSA Certificate",
    issuer: "Data Structures & Algorithms",
    category: "Programming",
    pdf: "/certs/Palak_DSA.pdf",
    image: dsa
  },
  {
    title: "Ai Agent Hackthon",
    issuer: "Unstop",
    category: "Hackthon", 
    pdf: "/certs/Ai Agent Hackthon.pdf",
    image: ai
  },
  {
    title: "Indexing Design Fundamentals",
    issuer: "MongoDB",
    image: indexedDB,
    category: "others",
    pdf: "/certs/palak_mongodb-Indexing_design_fundamentals.pdf"
  },
  {
    title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
    issuer: "Infosys Springboard",
    image: Masterai,
    category: "others",
    pdf: "/certs/palak-MasterAi.pdf"
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory ",
    issuer: "Infosys Springboard",
    image: computationalTheory,
    category: "others",
    pdf: "/certs/Palak_computional-theory_infosys.pdf"
  },
  {
    title: "Crud Operations",
    issuer: "MongoDB University",
    image: Crud,
    category: "others",
    pdf: "/certs/Palak-mongodb-Crud_operations.pdf"
  },
  // {
  //   title: "Relational to Document Model",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Relational to Document Model Certificate.pdf"
  // },
  // {
  //   title: "Schema Design Optimization",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Schema Design Optimization Certificate.pdf"
  // },
  // {
  //   title: "Schema Patterns and Antipatterns",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Schema Patterns and Antipatterns Certificate.pdf"
  // },
  // {
  //   title: "Secure MongoDB Atlas",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Secure MongoDB Atlas Certificate.pdf"
  // },
  // {
  //   title: "Secure MongoDB Self-Managed",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Secure MongoDB Self-Managed Certificate.pdf"
  // },
  // {
  //   title: "Sharding Strategies",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Sharding Strategies Certificate.pdf"
  // },
  // {
  //   title: "Vector Search Fundamentals",
  //   issuer: "MongoDB",
  //   pdf: "/certs/Vector Search Fundamentals Certificate.pdf"
  // }
];

export const personalInfo = {
  email: "kumaripalak85@gmail.com",
  location: "Phagwara, Punjab, India",
  about: "I am an aspiring Full stack developer with a strong interest in coding, problem-solving, and building practical software applications. I have experience with multiple programming languages including Java, JavaScript, Node.js, PHP, C, C++, and Python I have worked on projects such as Assured Contract Farming, a web-based platform developed during my recent semester, and an Examination Registration Form project in my first semester, which helped me gain a solid understanding of form handling and backend fundamentals. I aim to grow as a full-stack developer by working on real-world projects, continuously improving my technical skills, and staying open to new learning opportunities and collaborations.",
};

