import { Skill, Project, Experience, Achievement, PersonalValue, SocialLink } from "@shared/schema";
import { Code2, Palette, Rocket, Heart, Coffee } from "lucide-react";

export const personalInfo = {
  name: "Ashish Kumar Dubey",
  title: "Java Full Stack Developer",
  email: "ashishdubey.work@gmail.com",
  tagline: "Building scalable web applications & placement tech solutions",
  bio: "Final-year BCA student and solution-oriented Software Developer. I specialize in building scalable backend services with Java & Spring Boot and creating responsive frontends with React. I'm an active open-source contributor, hackathon finalist, and the creator of DayZero.",
};

export const personalValues: PersonalValue[] = [
  {
    icon: "Code2",
    title: "Clean Code",
    description: "Writing efficient, testable, and maintainable code standards is my priority.",
  },
  {
    icon: "Rocket",
    title: "Problem Solver",
    description: "I thrive on solving complex algorithmic problems and optimizing performance.",
  },
  {
    icon: "Heart",
    title: "Open Source",
    description: "Hacktoberfest Super Contributor active in the global developer community.",
  },
  {
    icon: "Coffee",
    title: "Continuous Learner",
    description: "Constantly mastering new stacks like Spring Security and Microservices.",
  },
  {
    icon: "Palette",
    title: "Full Stack",
    description: "Bridging the gap between robust backends and intuitive user interfaces.",
  },
];

export const skills: Skill[] = [
  { name: "Java", category: "Languages", icon: "SiJava" },
  { name: "Spring Boot", category: "Backend", icon: "SiSpringboot" },
  { name: "React", category: "Frontend", icon: "SiReact" },
  { name: "TypeScript", category: "Frontend", icon: "SiTypescript" },
  { name: "PostgreSQL", category: "Backend", icon: "SiPostgresql" },
  { name: "Hibernate", category: "Backend", icon: "SiHibernate" },
  { name: "MySQL", category: "Backend", icon: "SiMysql" },
  { name: "Python", category: "Languages", icon: "SiPython" },
  { name: "Docker", category: "Tools", icon: "SiDocker" },
  { name: "Git", category: "Tools", icon: "SiGit" },
  { name: "Tailwind", category: "Frontend", icon: "SiTailwindcss" },
  { name: "Maven", category: "Tools", icon: "SiApachemaven" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "DayZero",
    description: "A comprehensive placement preparation platform for Tier 2/3 colleges. Features include subject-wise MCQs, an AI-powered interviewer, and a JD Matcher to create company-specific mock tests.",
    image: "/dayzero.png",
    techStack: ["React", "Spring Boot", "PostgreSQL", "AI Integration"],
    // NOW AN ARRAY WITH TWO CATEGORIES 👇
    category: ["Full Stack", "AI/ML"], 
    liveUrl: "#", 
    githubUrl: "https://github.com/ashhdubey", 
  },
  {
    id: "2",
    title: "EcoShield",
    description: "Full-stack environment monitoring app. Implemented Spring Security with JWT, designed normalized PostgreSQL schemas, and integrated REST APIs for real-time weather metrics.",
    image: "/ecoshield.png",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Spring Security"],
    liveUrl: "https://myecoshield.netlify.app/",
    githubUrl: "https://github.com/ashhdubey/EcoShield",
    // STILL AN ARRAY, EVEN WITH ONE ITEM 👇
    category: ["Full Stack"],
  },
  {
    id: "3",
    title: "CineMatch",
    description: "Data-driven recommendation engine using collaborative filtering. Processed complex datasets with Pandas/NumPy to generate accurate user suggestions.",
    image: "/movie-rec.png",
    techStack: ["Python", "Pandas", "Machine Learning", "NumPy"],
    liveUrl: "https://colab.research.google.com/github/ashhdubey/Project---Movie-Recommendation-System/blob/main/MovieRecommendationSystem.ipynb",
    githubUrl: "https://github.com/ashhdubey/Project-CineMatch",
    category: ["Data Science"], // Array format
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Backend Dev Intern",
    company: "Prodesk IT & Engineering",
    period: "June 2025 - July 2025",
    responsibilities: [
      "Built backend services using Java and Spring Boot for the SDLC.",
      "Designed RESTful APIs for CRUD operations ensuring data integrity with JPA.",
      "Managed dependencies with Maven and participated in code reviews.",
    ],
  },
  {
    id: "2",
    role: "Python Dev Intern",
    company: "Effervescence IIIT Allahabad",
    period: "June 2024 - July 2024",
    responsibilities: [
      "Developed a data-driven Movie Recommendation engine using Python & Pandas.",
      "Implemented algorithmic logic for data preprocessing and optimization.",
    ],
  },
];

export const achievements: Achievement[] = [
   {
    id: "1",
    title: "Oracle Certified Associate",
    organization: "Oracle",
    date: "2025",
    description: "Earned Oracle OCI Foundations Associate & Java Foundations certifications.",
    // Added link here
    certificateUrl: "https://www.linkedin.com/in/ashhdubey/overlay/certifications/998084443/multiple-media-viewer/?profileId=ACoAAD7kMlMBg2Iagw3w4hqABBdt2gpxA5ZsRYs&treasuryMediaId=1762111038109",
    badgeImage: "/oracle.png",
  },
  {
    id: "2",
    title: "Hacktoberfest Super Contributor",
    organization: "DigitalOcean",
    date: "2025",
    description: "Achieved Super Contributor status by merging valid PRs to global open-source repos.",
    // Added link here
    badgeImage: "/hacktoberfest.png",
  },

  {
    id: "3",
    title: "Software Engineering Job Simulation",
    organization: "J.P. Morgan",
    date: "2025",
    description: "Earned J.P Morgan Software Engineering Job Simulation Certifications.",
    // Added link here
    certificateUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68cf028a30e25836c2586897_1758649311704_completion_certificate.pdf",
    badgeImage: "/jpmorgan.png",
    
  },

   {
    id: "4",
    title: "Java Developer Batch 4",
    organization: "Telesko",
    date: "2025",
    description: "Complete the Java developer batch 4 by telukso and pass certifications exam.",
    // Added link here
    certificateUrl: "https://courses.telusko.com/learn/certificate/11704574-220144",
    badgeImage: "/telusko.png",
    
  },

  {
    id: "5",
    title: "Top 5 Finalist - HackStrom",
    organization: "Hackathon",
    date: "2025",
    description: "Deployed EcoShield v3.5 with updated features, securing a top position.",
    // Added link here
    certificateUrl: "https://www.linkedin.com/posts/ashhdubey_codestrong25-hackathon-innovation-activity-7383576751920050177-g9Dr",
    badgeImage: "/siet.png",
  },

  {
    id: "6",
    title: "Top 7 Finalist - HackDiwas2.0",
    organization: "Hackathon",
    date: "2024",
    description: "Build EcoShield v1.0 (Prototype).",
    // Added link here
    certificateUrl: "https://www.linkedin.com/posts/ashhdubey_codestrong25-hackathon-innovation-activity-7383576751920050177-g9Dr",
    badgeImage: "/uu.png",
  },
 
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "United University, Prayagraj",
    period: "2023 - 2026",
    status: "Pursuing | CGPA: 8.88",
    image: "/uu.png", // You can add this image to public later
  },
  {
    id: "2",
    degree: "Senior Secondary (XII)",
    institution: "Kendriya Vidyalaya Old Cantt, Prayagraj",
    period: "2021 - 2022",
    status: "Completed | Score: 84.4%",
    image: "/kv.png", // You can add this image to public later
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/ashhdubey", icon: "SiGithub" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ashhdubey", icon: "SiLinkedin" },
];