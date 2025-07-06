import img1 from "./assets/guide.jpg";
import img2 from "./assets/allergy.jpg";
import img3 from "./assets/quizapp.png";
import img4 from "./assets/stock.png";
//import img5 from "./assets/sqlgenerator.png"; 
const logotext = "SAMI";

const meta = {
    title: "SAMI | Portfolio",
    description: "I’m Elhadraoui Sami — a passionate software engineering student from Morocco, specializing in full-stack web development and exploring AI.",
};

const introdata = {
    title: "I’m Elhadraoui Sami",
    animated: {
        first: "I build full-stack web apps",
        second: "I'm passionate about AI and Clean Architecture",
        third: "I turn complex ideas into scalable code",
    },
    description:
        "Software Engineering student with a strong focus on modern web technologies, backend systems, and growing knowledge in AI. I thrive on building real-world solutions and continuously evolving my skills.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // Replace with your image
};

const dataabout = {
    title: "A bit about me",
    aboutme:
        "Currently pursuing a Software Engineering degree at EMSI Casablanca, I specialize in full-stack web development using technologies like React, Next.js, TypeScript, .NET, and MongoDB. I’ve completed internships at OCP Group and Ibn Khaldoun University, where I designed scalable platforms for real-world needs. I'm also deeply curious about artificial intelligence and always seek opportunities to integrate smart features into applications.",
};

const worktimeline = [
    {
        jobtitle: "Full Stack Intern",
        where: "OCP Group",
        date: "Jul - Sep 2023",
    },
    {
        jobtitle: "Software Developer Intern",
        where: "Ibn Khaldoun University",
        date: "Sep - Dec 2022",
    },
];

const skills = [
    { name: "TypeScript", value: 90 },
    { name: "React / Next.js", value: 85 },
    { name: ".NET / C#", value: 80 },
    { name: "Express.js & Node.js", value: 75 },
    { name: "MongoDB", value: 70 },
    { name: "SQL Server", value: 70 },
    { name: "Python (AI exploration)", value: 65 },
    { name: "Docker & CI/CD", value: 60 },
];

const services = [
    {
        title: "Full-Stack Web Development",
        description: "From frontend to backend, I build performant, scalable, and maintainable web apps using modern stacks like React, Next.js, TypeScript, and .NET.",
    },
    {
        title: "Software Engineering",
        description: "I apply clean architecture principles to create robust software solutions that are easy to maintain and extend." ,
    },
    {
        title: "AI Passion",
        description: "Currently exploring the world of AI, synthetic data, and intelligent systems. Eager to apply machine learning to real-world projects soon.",
    },
];

const dataportfolio = [
    {
        img: img3,
        description: "QuizApp — Full-stack quiz platform with JWT auth, admin dashboard & analytics built with Spring Boot & React",
        link: "https://github.com/sami3l/QuizApp_Dockerise",
    },
    {
        img: img1,
        description: "Food Allergy Detector — AI-powered mobile app for barcode scanning & personalized allergen risk assessment",
        link: "https://github.com/sami3l/Foodallergy_MobileApp",
    },
    {
        img: img2,
        description: "GuideMalvoyant — AI navigation assistant for visually impaired with TensorFlow Lite & voice guidance",
        link: "https://github.com/sami3l/ProjetAiMalvoyant_V2",
    },
    {
        img: img4,
        description: "StockManagement — Inventory system built with Next.js, Prisma & Express.js",
        link: "https://github.com/sami3l/StockManagement",
    },
    {
        img: "https://picsum.photos/400/500/?grayscale",
        description: "ClassDiagramEditor — UML tool built with React & Canvas",
        link: "https://github.com/sami3l/ClassDiagramEditor",
    },
];

const contactConfig = {
    YOUR_EMAIL: "elhadraoui-sami@emsi-edu.ma",
    YOUR_FONE: "+212 676 092 320",
    description: "I’m open to internships, collaborations, and innovative project ideas — especially those involving full-stack development or AI.",
    YOUR_SERVICE_ID: "service_fp6lk6q",
    YOUR_TEMPLATE_ID: "template_f2fqosp",
    YOUR_USER_ID: "8daUFpsZc2j_DPLd8",
};

const socialprofils = {
    github: "https://github.com/sami3l",
    linkedin: "https://www.linkedin.com/in/elhadraoui-sami/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
