// import snapdealVideo from "../Images/assets/snapdealVideo.mp4";
// import ModesenVideo from "../Images/assets/ModesenVideo.mp4";
// import Travelwithus from "../Images/assets/Travelwithus.mp4";

import snapdeal from "../Images/assets/snapdeal.png";
import modesen from "../Images/assets/Modeson.png";
import travelwithus from "../Images/assets/Travelwithus.png";
import quesTyme from "../Images/assets/QuesTyme.png";
import todoapp from "../Images/assets/TodoApp.png";

export const skills = [
    {
        icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
        title: "HTML",
        tag: "frontend"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        title: "CSS",
        tag: "frontend"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        title: "JavaScript",
        tag: "frontend"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
        title: "react",
        tag: "frontend"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        title: "TypeScript",
        tag: "backend"
    },
    {
        icon: "https://img.icons8.com/color/512/chakra-ui.png",
        title: "Chakra-UI",
        tag: "frontend"
    },
    {
        icon: "https://img.icons8.com/fluency/512/node-js.png",
        title: "Node.js",
        tag: "backend"
    },
    {
        icon: "https://www.svgrepo.com/show/452093/redux.svg",
        title: "redux",
        tag: "backend"
    },
    {
        icon: "https://img.icons8.com/color/512/mongodb.png",
        title: "MongoDB",
        tag: "backend"
    },
    {
        icon: "https://img.icons8.com/color/512/express-js.png",
        title: "Express.js",
        tag: "backend"
    },
    {
        icon: "https://img.icons8.com/ios-glyphs/512/github.png",
        title: "Github",
        tag: "platform"
    },
    {
        icon: "https://i.ibb.co/61nck0S/download-removebg-preview.png",
        title: "VS Code",
        tag: "platform"
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png",
        title: "Replit",
        tag: "platform"
    },
    {
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png",
        title: "Sandbox",
        tag: "platform"
    },
    {
        icon: "https://img.icons8.com/ios-filled/512/codepen.png",
        title: "CodePen",
        tag: "platform"
    },

]

export const projects = [
    {
        id: 1,
        title: "Snapdeal",
        type: "E-COMMERCE",
        // video:snapdealVideo,
        // image:"https://drive.google.com/file/d/1ji_dyuAg6R1yfDjL8wQg-9XSyDa00eC_/view?usp=sharing",
        image:snapdeal,
        description: "Snapdeal is an e-commerce website, where user can purchase across different categories such as clothing, kitchen accessories, footware, toys, makeup,etc ",
        techStack: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Akkukumari/terrific-language-9890",
        liveDemo: "https://spontaneous-bunny-184777.netlify.app/"
    },
    {
        id: 2,
        title: "Modesen",
        type: "E-COMMERCE",
        // video:ModesenVideo,
        image:modesen,
        description: "Modesen is an e-commerce platform for dealing with the sale of clothing, fashion, and styling accesoories.",
        techStack: ["HTML", "CSS", "JavaScript","React", "Redux", "chakra-UI",],
        github: "https://github.com/Akkukumari/taboo-lock-5540",
        liveDemo: "https://modesenbyak.netlify.app/"
    },
    {
        id: 3,
        title: "QuesTyme",
        type: "Meet-Scheduler",
        // video:Travelwithus,
        image:quesTyme,
        description: "QuesTyme is a interview scheduler application with features for interview scheduling and one-on-one sessions.",
        techStack: ["HTML", "CSS","Chakra UI", "React","Redux", "TypeScript"],
        github: "https://github.com/Akkukumari/QuesTyme",
        liveDemo: "https://clever-horse-e88e52.netlify.app/"
    },
    {
        id: 4,
        title: "TodoApp",
        type: "Day Management",
        // video:Travelwithus,
        image: todoapp,
        description: "TodoApp is a task management app to help you stay organized and manage your day-to-day.",
        techStack: ["HTML", "CSS","JavaScript", "React", "Redux","MongoDB", "Node","Express"],
        github: "https://github.com/Akkukumari/todoappfrontend",
        liveDemo: "https://stupendous-lolly-5c34e5.netlify.app"
    },
    {
        id: 5,
        title: "Travelwithus!",
        type: "E-COMMERCE",
        // video:Travelwithus,
        image: travelwithus,
        description: "Travelwithus is an application to book one on one slot for interview and also to book bulk in interview. It can be accessable to the user side as well as admin side.",
        techStack: ["HTML", "CSS","JavaScript", "React"],
        github: "https://github.com/Akkukumari/travelwithus",
        liveDemo: "https://647e2b1f0b8d1a080ffff486--playful-kelpie-34c937.netlify.app/"
    }
   
]