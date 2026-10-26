import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Aquí puedes agregar otras configuraciones de Next.js si las necesitas
  async redirects() {
    return [
      // URL antigua del CV (antes de tener un PDF por idioma)
      { source: "/Curriculum-Arnaldo.pdf", destination: "/cv/Arnaldo-Espinoza-CV-es.pdf", permanent: true },
    ];
  },
};

// Combina la configuración de next-intl con la configuración de Next.js
export default withNextIntl(nextConfig);