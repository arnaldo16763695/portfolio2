import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

export const projectData = [
  {
    image: "/work/4.png",
    category: "react js",
    name: "Sitio web de Movinet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.",
    link: "",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Sitio web de Colabry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.",
    link: "",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Sitio web de Example",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.",
    link: "",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Sitio web de Exmaple 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.",
    link: "",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "react fullstack",
    name: "Sitio web ejemplo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.",
    link: "",
    github: "",
  },
];

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Diseño Web",
    description:
      "Diseñador Web con experiencia en HTML, CSS, JavaScript y herramientas de diseño como Figma. Especializado en la creación de sitios responsivos y optimizados, con prácticas de SEO y accesibilidad para mejorar la experiencia del usuario.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Desarrollo Web ",
    description:
      "Desarrollador web con habilidad para crear soluciones innovadoras y eficientes en proyectos de diversos sectores. Experiencia en desarrollo de interfaces interactivas, integraciones de APIs y optimización de rendimiento.",
  },
  // {
  //   icon: <Gem size={72} strokeWidth={0.8} />,
  //   title: "App developmt",
  //   description:
  //     "Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus itaque dignissimos excepturi.",
  // },
];

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Arnaldo Espinoza",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+58 0414 4786040",
  },
  {
    icon: <MailIcon size={20} />,
    text: "arnaldoespinoza1@hotmail.com",
  },
  // {
  //   icon: <Calendar size={20} />,
  //   text: "Nacido el 12 de abril de 1983",
  // },
  {
    icon: <GraduationCap size={20} />,
    text: "Ingeniero de Sistema",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Venezuela, Punto Fijo, Falcón",
  },
];

export const qualificationData = [
  {
    title: "educación",
    data: [
      {
        univerity: "Carlos Soublette",
        qualification: "TSU en Sistemas de Información",
        year: "2003-2006",
      },
      {
        univerity: "Carlos Soublette",
        qualification: "TSU en Sistemas de Información",
        year: "2003-2006",
      },
    ],
  },
  {
    title: "experiencia",
    data: [
      {
        company: "Makro Comercializadora sa",
        role: "Operador Soporte Técnico",
        year: "2005-2016",
      },
      {
        company: "Emprevet",
        role: "instructor CCNA",
        year: "2014-2016",
      },
      {
        company: "VIT (Venezolana de Industrias Tecnológicas)",
        role: "Jefe de Redes",
        year: "2018-2024",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Desarrollo Front-end",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Desarrollo Back-end ",
      },
      {
        name: "Linux ",
      },
      {
        name: "Docker ",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
