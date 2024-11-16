import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";





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
