// Datos del portafolio. Los textos traducibles se resuelven con next-intl
// usando las claves indicadas (namespaces About, Projects).

// Año en que empecé a dedicarme a tiempo completo al desarrollo web
export const WEB_DEV_START_YEAR = 2022;

export const contactData = {
  name: "Arnaldo Espinoza",
  // razón social de la firma personal: debe coincidir exactamente con el registro
  // (Meta la compara con los documentos en la verificación del negocio)
  legalName: "ARNALDO JESUS ESPINOZA, F.P",
  rif: "V167636957",
  email: "arnaldoespinoza1@hotmail.com",
  phone: "+58 414 4786040",
  phoneHref: "tel:+584144786040",
  whatsapp: "584144786040",
  location: "Punto Fijo, Falcón, Venezuela",
};

// enlace a WhatsApp con un mensaje inicial opcional
export const whatsappLink = (message) =>
  `https://wa.me/${contactData.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// CV en PDF por idioma (public/cv/). Los idiomas sin PDF propio usan el de CV_FALLBACK
export const cvFiles = {
  es: "/cv/Arnaldo-Espinoza-CV-es.pdf",
  en: "/cv/Arnaldo-Espinoza-CV-en.pdf",
};
const CV_FALLBACK = ["en", "es"];

// CV que corresponde al idioma de la página
export const getCv = (locale) => {
  const lang = cvFiles[locale] ? locale : CV_FALLBACK.find((l) => cvFiles[l]);
  return { lang, file: cvFiles[lang] };
};

// CVs en los demás idiomas, para ofrecerlos como alternativa
export const getOtherCvs = (locale) => {
  const { lang } = getCv(locale);
  return Object.entries(cvFiles)
    .filter(([l]) => l !== lang)
    .map(([l, file]) => ({ lang: l, file }));
};

// categorías: clave de traducción en Projects.categories
export const projectsData = [
  {
    id: "vzfood",
    image: "/work/projects/vzfood.jpg",
    category: "web-apps",
    name: "VZ Food",
    client: null,
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "https://vzfood.ajedev.com",
    github: "",
  },
  {
    id: "atiende",
    image: "/work/projects/atiende.png",
    category: "web-apps",
    name: "Atiende",
    client: null,
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API", "Instagram API"],
    link: "https://atiende.ajedev.com",
    github: "",
  },
  {
    id: "tucampo",
    image: "/work/projects/tucampo.jpg",
    category: "web-sites",
    name: "Tucampo",
    client: "Tucampo",
    tech: ["WordPress", "WooCommerce"],
    link: "https://tucampo.cl",
    github: "",
  },
  {
    id: "food",
    image: "/work/projects/portfolio-9.jpg",
    category: "web-apps",
    name: "Food E-commerce",
    client: null,
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zustand", "Supabase"],
    link: "https://food.ajedev.com",
    github: "",
  },
  {
    id: "globalsi-app",
    image: "/work/projects/portfolio-7.jpg",
    category: "web-apps",
    name: "Globalsi App",
    client: "Globalsi",
    tech: ["Next.js", "Nest.js", "Shadcn UI"],
    link: "https://global.ajedev.com",
    github: "",
  },
  {
    id: "vencol",
    image: "/work/projects/portfolio-6.jpg",
    category: "web-sites",
    name: "Vencol Technology",
    client: "Vencol Technology",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://vencoltec.com",
    github: "",
  },
  {
    id: "aje-pass",
    image: "/work/projects/portfolio-4.jpg",
    category: "web-apps",
    name: "Aje Pass",
    client: null,
    tech: ["Next.js"],
    link: "https://pass-manager-kappa.vercel.app",
    github: "",
  },
  {
    id: "vit",
    image: "/work/projects/portfolio-3.jpg",
    category: "web-sites",
    name: "VIT",
    client: "VIT",
    tech: ["Next.js"],
    link: "http://www.vit.gob.ve",
    github: "",
  },
  {
    id: "cook-recipes",
    image: "/work/projects/portfolio-8.jpg",
    category: "web-apps",
    name: "Cook Recipes",
    client: null,
    tech: ["JavaScript", "HTML", "CSS", "Edamam API"],
    link: "https://cook-recipes-rho.vercel.app",
    github: "",
  },
  {
    id: "movinet",
    image: "/work/projects/portfolio-2.jpg",
    category: "web-sites",
    name: "Movinet",
    client: "Movinet",
    tech: ["Odoo"],
    link: "https://globalsi.cl",
    github: "",
  },
];

export const projectCategories = [
  ...new Set(projectsData.map((project) => project.category)),
];

export const clientsCount = new Set(
  projectsData.filter((project) => project.client).map((project) => project.client)
).size;

// role: clave de traducción en About.roles
export const experienceData = [
  {
    company: "Freelance · ajedev",
    role: "fullstack-dev",
    year: `${WEB_DEV_START_YEAR} –`,
  },
  {
    company: "Globalsi SPA (Chile)",
    role: "it-consultant",
    year: "2019 –",
  },
  {
    company: "VIT (Venezolana de Industrias Tecnológicas)",
    role: "network-head",
    year: "2018 –",
  },
  {
    company: "Emprevet S.A.",
    role: "ccna-instructor",
    year: "2013 – 2015",
  },
  {
    company: "Makro Comercializadora S.A.",
    role: "alc-assistant",
    year: "2005 – 2016",
  },
];

// qualification: clave de traducción en About.degrees
export const educationData = [
  {
    university: "I.U. Politécnico Santiago Mariño",
    qualification: "systems-engineer",
    year: "2012 – 2016",
  },
  {
    university: "I.U. Carlos Soublette",
    qualification: "tsu-information-systems",
    year: "2005 – 2008",
  },
];

// key: clave de traducción en About.skill-groups
export const skillData = [
  { key: "frontend", items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Shadcn UI", "Zustand"] },
  { key: "backend", items: ["Node.js", "Nest.js", "Prisma", "Supabase", "MySQL", "PostgreSQL"] },
  { key: "infra", items: ["Linux", "Docker", "Nginx", "Git", "Cisco CCNA", "Routing & Switching"] },
];

export const toolsData = [
  { name: "VS Code", imgPath: "/about/vscode.svg" },
  { name: "Figma", imgPath: "/about/figma.svg" },
  { name: "Notion", imgPath: "/about/notion.svg" },
  { name: "WordPress", imgPath: "/about/wordpress.svg" },
];
