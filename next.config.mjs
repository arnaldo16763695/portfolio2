import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Aquí puedes agregar otras configuraciones de Next.js si las necesitas
};

// Combina la configuración de next-intl con la configuración de Next.js
export default withNextIntl(nextConfig);