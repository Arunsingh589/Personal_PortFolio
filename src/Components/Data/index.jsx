import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
    FaAngular,
} from "react-icons/fa6";

import projectImage1 from './../../../public/assets/project1.jpeg';
import projectImage2 from "./../../../public/assets/project2.jpeg";
import projectImage3 from "./../../../public/assets/project3.jpeg";
import projectImage4 from "./../../../public/assets/project4.jpeg";
import projectImage5 from "./../../../public/assets/project5.jpeg";
import projectImage6 from "./../../../public/assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { DiJavascript, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const HERO = {
    name: "ARUN SINGH",
    greet: "Hello there! 👋🏻",
    description:
        "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I have 3 months of experience in frontend development using React.js, transforming ideas into engaging web experiences.",
};

export const PROJECTS = [
    {
        id: 1,
        name: "E-Commerce Website",
        description:
            "An e-commerce web application developed using React.js and Stripe for payment integration, Login system, featuring a comprehensive product catalog, shopping cart, and checkout system.",
        // image: "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
        image: projectImage2,
        githubLink: "https://responsive-e-commerce-website-react-js.vercel.app/",
    },
    {
        id: 2,
        name: "Movie Website",
        description:
            "The movie website is built using React and Tailwind CSS, offering a sleek and responsive user interface. It allows users to explore a wide range of movies with features like dynamic search functionality.",
        // image: "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
        image: projectImage3,
        githubLink: "https://imdb-movie-app-eight.vercel.app/",
    },
    {
        id: 3,
        name: "Stranger Chat App",
        description:
            "Stranger Chat App is a real-time, anonymous chat platform built with Node.js, React, Express, and Socket.io. It allows users to connect with random strangers in dedicated chat rooms for instant messaging. The app supports dynamic user notifications, responsive design, and seamless user experiences with features like leave room, reconnect, and real-time updates.",
        image: projectImage1,
        githubLink: "https://github.com/Arunsingh589/Stranger-Chat-App",
    },
    {
        id: 4,
        name: "Online Resume Builder",
        description:
            "The online resume builder is developed using HTML, CSS, JavaScript, React, Tailwind Css  providing users with an intuitive platform to create professional resumes.",
        image: projectImage5,
        githubLink: "https://online-resume-builder-rho.vercel.app/",
    },
    {
        id: 5,
        name: "Twitter Clone",
        description:
            "The Twitter clone is built using React and Tailwind CSS, providing a dynamic and responsive social media experience similar to the original Twitter platform. The application features a real-time feed where users can post tweets. ",
        image: projectImage6,
        githubLink: "https://responsive-twitter-clone.vercel.app/",
    },
    {
        id: 6,
        name: "Weather App",
        description:
            "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
        // image: "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
        image: projectImage4,
        githubLink: "https://weather-application-react-mocha.vercel.app/",
    },
];

export const BIO = [
    "I studied Computer Science at the BS Anangpuria Institute of Technology and Management and graduated in 2024 with an overall CGPA of 7.8.",
    "Frontend Developer from India, passionate about building user-friendly web applications.",
    "Focused on turning ideas into interactive and functional projects, with experience in modern web development technologies and best practices.",
    "Proficient in React.js, JavaScript, HTML, CSS, and Tailwind CSS, with expertise in creating responsive and visually appealing designs."
];

export const SKILLS = [
    {
        icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
        name: "React",
        experience: "3 month",
    },
    {
        icon: <DiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
        name: "JavaScript",
        experience: "3 month",
    },
    {
        icon: <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
        name: "Express.js",
        experience: "0 years",
    },
    {
        icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
        name: "Css",
        experience: "0 years",
    },
    {
        icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
        name: "Node.js",
        experience: "0 years",
    },
    {
        icon: <RiTailwindCssFill className="text-4xl text-sky-400 lg:text-5xl" />,
        name: "Tailwind Css",
        experience: "0 years",
    },
    {
        icon: <FaHtml5 className="text-4xl text-[#ff5733] lg:text-5xl" />,
        name: "Html",
        experience: "0 years",
    },
];

export const EXPERIENCES = [
    // {
    //     title: "Lead Frontend Developer",
    //     company: "Innovative Tech Solutions",
    //     duration: "July 2020 - Present",
    //     description:
    //         "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    // },
    // {
    //     title: "Frontend Engineer",
    //     company: "Digital Creations",
    //     duration: "February 2016 - June 2020",
    //     description:
    //         "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    // },
    {
        title: "Frontend Development Traning",
        company: "Snaptic Minds Consulting Pvt. Ltd.",
        duration: "April 2024 - July 2024",
        description:
            "In my role as a Junior Frontend Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, JavaScript, React to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
];

export const EDUCATION = [
    // {
    //     degree: "Post-Matriculation Class 12th(Science)",
    //     institution: "Rawal Bal Shiksha Kendra",
    //     duration: "April 2019 - March 2020",
    //     description:
    //         "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
    // },
    {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Bs Anangpuria Institute of Technology and Management",
        duration: "August 2020 - August 2024",
        description:
            "Focused on web development, programming languages. Actively involved in coding clubs and hackerrank, where I developed several web applications using HTML, CSS, JavaScript, and React. Completed a  project on developing an e-commerce platform. Graduated with a 7.8 GPA.",
    },
];

export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://github.com/Arunsingh589",
        icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "http://linkedin.com/in/arun-singh-27148b254",
        icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },

];