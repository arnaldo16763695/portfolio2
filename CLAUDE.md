# CLAUDE.md

Portafolio personal de **Arnaldo Espinoza** (marca: **ajedev**). Versión nueva (Next.js + i18n) que reemplazará al portafolio en producción en https://ajedev.com. El objetivo actual es **"activarlo"**: sustituir todo el contenido placeholder por la información real que ya está publicada en ajedev.com (ver sección *Contenido de referencia*).

Responde y comenta en **español**; los textos visibles de la UI van siempre por i18n (en/es/fr).

## Comandos

```bash
npm run dev      # servidor de desarrollo en http://localhost:3000 (redirige a /en)
npm run build    # build de producción (output: standalone)
npm run start    # sirve el build
npm run lint     # next lint (aún no hay .eslintrc; la primera vez pedirá configurarlo)
```

No hay tests. Verifica los cambios con `npm run build` y revisando `/en`, `/es` y `/fr` en el navegador, en tema claro y oscuro.

## Stack

- Next.js 14.2 (App Router) · React 18 · **JavaScript/JSX** (no TypeScript; `jsconfig.json` define el alias `@/*` → raíz)
- Tailwind CSS 3 + shadcn/ui (estilo `default`, `tsx: false`, componentes en `components/ui/`)
- next-intl 3 (locales `en`, `es`, `fr`; default `en`)
- next-themes (clase `dark`, tema por defecto `light`)
- framer-motion, swiper, react-countup, lucide-react, react-icons
- react-hook-form + zod instalados pero **aún no usados** en el formulario

## Estructura

```
app/[locale]/layout.jsx     # layout raíz: fuente Outfit, NextIntlClientProvider, ThemeProvider, Header, Footer
app/[locale]/page.jsx       # Home: Hero → About → Services → Work → Cta (Reviews oculto)
app/[locale]/projects/      # listado de proyectos con tabs por categoría
app/[locale]/networks/      # landing de servicios de redes (URL pública: /es/redes, /en/networks, /fr/reseaux)
app/[locale]/contact/       # datos de contacto + <Form/>
app/[locale]/template.jsx   # transición de página
app/lib/data.js             # contacto, proyectos, experiencia, educación, skills (fuente única de datos)
app/globals.css             # variables de color shadcn + clases utilitarias (.h1, .h2, .h3, .section-title, .subtitle)
components/                 # secciones y piezas de la UI (Hero, About, Work, ProjectCard, Reviews, Socials...)
components/ui/              # primitivas shadcn — no editar a mano salvo necesidad
i18n/routing.js             # locales, pathnames traducidos + Link/redirect/usePathname/useRouter/getPathname
i18n/request.js             # carga messages/<locale>.json
messages/{en,es,fr}.json    # traducciones
middleware.js               # middleware de next-intl
public/                     # imágenes: hero/, about/, work/, reviews/, contact/, cta/
```

## Convenciones

- **Textos**: nunca hardcodear texto visible. Añadir la clave en los **tres** archivos `messages/*.json` (mismo namespace y misma clave) y usar `useTranslations('<Namespace>')`. Namespaces actuales: `Metadata`, `NavLinks`, `Hero`, `About`, `Services`, `Works`, `Projects`, `Networks`, `Reviews`, `Cta`, `Contact`, `Form-contact`, `Footer`.
- **Datos**: proyectos, experiencia, educación, skills y contacto viven en `app/lib/data.js`. Ahí solo van datos no traducibles (nombres propios, URLs, años) y **claves**; los textos se resuelven en `messages/*.json` (`Projects.items.<id>`, `Projects.categories.<cat>`, `About.roles.<rol>`, `About.degrees.<titulo>`, `About.skill-groups.<grupo>`). Para añadir un proyecto: entrada en `projectsData` + captura en `public/work/projects/` + descripción en los tres JSON. Los contadores del Hero se calculan desde estos datos.
- **Navegación interna**: usar `Link` / `useRouter` / `usePathname` de `@/i18n/routing`, no los de `next/link` / `next/navigation`, para conservar el locale (el `usePathname` de next-intl devuelve la ruta interna, sin prefijo de idioma). Los enlaces externos van con `<a target="_blank" rel="noopener noreferrer">`.
- **Rutas nuevas**: crear la carpeta en `app/[locale]/<ruta-interna>` y registrarla en `pathnames` de `i18n/routing.js` (con su URL traducida por idioma si aplica). Los `Link` usan siempre la ruta interna (`/networks`), nunca la traducida.
- **Imports** con alias `@/` (`@/components/...`, `@/app/lib/data`).
- Componentes de UI nuevos: añadirlos con shadcn (`npx shadcn@latest add <comp>`) para que respeten `components.json`.
- Estilo: Tailwind con los tokens de `globals.css` (`text-primary`, `bg-secondary`, `text-muted-foreground`...) y variantes `dark:`. Los fondos decorativos están definidos como `backgroundImage` en `tailwind.config.js` (`bg-hero`, `bg-hero_shape`, `bg-about_shape_light`, etc.).
- Los componentes que usan hooks del cliente llevan `"use client"`.
- Comentarios en español, breves, como en el resto del código.

## Despliegue

- **Este proyecto se despliega en Vercel** (repo GitHub `arnaldo16763695/portfolio2`), hoy en https://portfolio2-sigma-eosin.vercel.app. Push a `main` → producción en Vercel; push a otra rama → deployment de preview.
- **ajedev.com todavía NO apunta a Vercel**: el registro A apunta a `190.205.42.241` (servidor propio con nginx/1.25.1), que sirve el portafolio antiguo en HTML estático. Para el relanzamiento hay que añadir `ajedev.com` y `www.ajedev.com` como dominios del proyecto en Vercel y cambiar **solo** los registros DNS de `@` y `www`. No tocar los de los subdominios (`food`, `global`, etc.).
- `Dockerfile`, `docker-compose.yml` y `nginx/` son un intento de autohospedaje que **no se usa** (`portafolio.ajedev.com` no responde). `output: "standalone"` en `next.config.mjs` existe por ese Dockerfile; Vercel lo ignora.
- `.env` existe pero está vacío y está ignorado por git.

## Contenido de referencia (producción, ajedev.com)

Fuente de verdad del contenido (sitio en producción + `public/Curriculum-Arnaldo.pdf`). Ya está migrado a `app/lib/data.js` y `messages/`; se conserva aquí como referencia.

**Perfil**
- Nombre: Arnaldo Espinoza — Programador Web / Desarrollador Full Stack
- Firma personal (razón social): **ARNALDO JESUS ESPINOZA, F.P** (sin punto final; `contactData.legalName`) · RIF: V167636957 (`contactData.rif`). Aparece en el pie de página de todas las páginas porque ajedev.com es la web del negocio declarada ante Meta (proveedor de la API de WhatsApp/Meta). No cambiar su escritura sin confirmar con el registro.
- Ubicación: Punto Fijo, Edo. Falcón, Venezuela
- Teléfono: +58 0414 4786040 · Email: arnaldoespinoza1@hotmail.com
- Formación (según CV): Ingeniero de Sistemas, I.U.P. Santiago Mariño (2012–2016); TSU en Sistemas de Información, I.U. Carlos Soublette (2005–2008)
- Idiomas: español nativo, inglés intermedio
- CV: `public/Curriculum-Arnaldo.pdf` (descargable desde el Hero)

**Bio (texto original en producción)**
> Desde mis inicios en el ámbito laboral, me he desempeñado en soporte técnico, administración de redes y servidores, con experiencia en configuración de servidores Linux, routers y switches. Actualmente, me enfoco en el desarrollo web fullStack. Como Frontend, manejo HTML5, CSS3 con Tailwind CSS, TypeScript, JavaScript y su librería React con el framework Next.js. En Backend, trabajo con Node.js y Nest.js, además de bases de datos como MySQL y PostgreSQL. Constantemente aprendo nuevas herramientas y librerías para mejorar mis habilidades. Soy un apasionado por la tecnología, disfruto trabajar en equipo y estoy siempre abierto a aprender.

**Experiencia**
- Freelance (ajedev) — Desarrollador web full stack (2022 – actualidad; en el CV: dedicado al desarrollo web desde mediados de 2022)
- VIT (Venezolana de Industrias Tecnológicas) — Jefe de Redes (2018–2024)
- Emprevet S.A. — Instructor Cisco CCNA (2013–2015, según CV)
- Makro Comercializadora S.A. — Asistente de Administración, Logística y Control, incluía soporte técnico (2005–2016)
- ID For Idea — Desarrollador Web Frontend (aparece en el CV sin fechas; no se muestra en el sitio)

**Skills**
- Frontend: HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Astro.js, Shadcn UI, Zustand
- Backend: Node.js, Nest.js, Prisma, Supabase
- Bases de datos: MySQL, PostgreSQL
- Testing: Vitest · Infra: Linux, Docker, redes (routers/switches)
- Niveles mostrados en producción: Frontend 90 %, Diseño web 85 %, Backend 85 %

**Servicios**: Programación web (front/back a medida) · Diseño web (responsive y accesible) · SEO (posicionamiento orgánico)

**Proyectos**

| Proyecto | Descripción | Tecnologías | Enlace |
|---|---|---|---|
| Sitio web Movinet | Sitio comercial sobre CRM Odoo para empresa de servicios IT | Odoo | https://globalsi.cl |
| Página web VIT | Sitio full stack administrable de drivers de equipos | Next.js | http://www.vit.gob.ve |
| Aje Pass | Gestor y generador de contraseñas seguras | Next.js | https://pass-manager-kappa.vercel.app |
| Portafolio desarrollador web | Plantilla de portafolio | Next.js, Tailwind CSS | https://portfolio2-sigma-eosin.vercel.app/es |
| Vencol Technology | Sitio corporativo | Astro.js, Tailwind CSS | https://vencoltec.com |
| Globalsi App | Gestión de trabajos de campo | Next.js, Nest.js, Shadcn UI | https://global.ajedev.com |
| Cook Recipes | Buscador de recetas con API Edamam | JavaScript vanilla | https://cook-recipes-rho.vercel.app |
| E-commerce de comida | Pedidos con panel de admin y flujo de cocina en tiempo real | Next.js, TypeScript, Prisma, PostgreSQL | https://food.ajedev.com |

**Redes**
- LinkedIn: https://www.linkedin.com/in/arnaldo-espinoza-58915b56
- GitHub: https://github.com/arnaldo16763695
- YouTube: https://www.youtube.com/@aje_dev

No hay testimonios reales en producción: la sección `Reviews` usa nombres y textos lorem ipsum — ocultarla o pedir testimonios reales, no inventarlos.

## Servicios de redes

Decisión actual: los servicios de redes e infraestructura se ofrecen **dentro de ajedev.com**, apoyados en la experiencia como Jefe de Redes e instructor CCNA. La tarjeta de redes en `Services` (home) enlaza a la landing `app/[locale]/networks/page.jsx` (namespace `Networks`, diagrama en `components/NetworkDiagram.jsx`). El SEO de esa página apunta a búsquedas locales.

Confirmado por el usuario (2026-10-07): ofrece todos los servicios listados "y más". Atiende de forma presencial en Punto Fijo y todo Falcón, y está dispuesto a atender en el resto de Venezuela (visita según proyecto o soporte remoto). Su número tiene WhatsApp: es el canal principal de la landing. Se genera con `whatsappLink(mensaje)` de `app/lib/data.js`, con un mensaje inicial traducido. Solo si el negocio de redes crece se evaluará una marca o dominio aparte. No publicar precios ni casos de clientes de redes que el usuario no haya confirmado.

## Pendientes conocidos

1. **Formulario de contacto**: no envía nada. Implementar con react-hook-form + zod y un Route Handler / Server Action (o servicio de email como Resend/SMTP) con variables en `.env`. Mientras tanto, el email y el teléfono de `/contact` son enlaces `mailto:`/`tel:`.
2. **Reseñas**: `Reviews` está oculto en la home porque solo tiene lorem ipsum; volver a añadirlo cuando haya testimonios reales (no inventarlos).
3. **Capturas**: las imágenes de `public/work/projects/` son las de producción (400×400). Conviene reemplazarlas por capturas más grandes. Las antiguas `public/work/1-4.png` ya no se usan.
4. **GitHub**: ningún proyecto tiene `github` en `projectsData`; añadir los repos públicos que existan.
5. **Despliegue**: apuntar ajedev.com a Vercel (ver sección Despliegue). Decidir si se eliminan `Dockerfile`, `docker-compose.yml` y `nginx/`. `metadataBase` en `layout.jsx` ya apunta a `https://ajedev.com`. Al publicar, revisar que los enlaces de proyectos funcionen: el 2026-10-07 `food.ajedev.com` respondía 500 y `global.ajedev.com` fallaba en SSL.
6. Añadir `sitemap.js` y `robots.js` en `app/` para el SEO (incluir las URLs traducidas de `pathnames`, p. ej. `/es/redes`).
7. Reemplazar el `README.md` genérico de create-next-app.
