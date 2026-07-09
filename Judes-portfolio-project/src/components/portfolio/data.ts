import aiAttendance from "@/assets/project-ai-attendance.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import studentMgmt from "@/assets/project-student-mgmt.jpg";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript", "Python",
  "Java", "Machine Learning", "Artificial Intelligence", "Git", "GitHub", "Tailwind CSS",
];

export const LANGUAGES = ["Tamil", "English", "Japanese"];

export const EXPERIENCE = [
  {
    title: "AI & ML Internship Training",
    company: "Digi Nexuz",
    period: "Internship",
    description:
      "Successfully completed AI & Machine Learning Internship Training with practical exposure to AI concepts, machine learning workflows, model development and real-world implementations.",
  },
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering",
    institution: "SNS College of Engineering",
    field: "Computer Science and Engineering",
    period: "Expected 2028",
    detail: "CGPA: 6.85",
  },
];

export const PROJECTS = [
  {
    title: "AI Attendance System",
    description:
      "An intelligent attendance solution powered by computer vision and facial recognition. Automates roll-call, logs entries in real time and generates insightful reports.",
    image: aiAttendance,
    tech: ["Python", "OpenCV", "Machine Learning", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio built with React, TypeScript and Tailwind. Features glassmorphism, smooth motion and a fully responsive layout.",
    image: portfolioImg,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    description:
      "A full-stack platform to manage student records, courses and performance analytics with role-based access and an admin dashboard.",
    image: studentMgmt,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
];