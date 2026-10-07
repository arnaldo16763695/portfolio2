import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Rutas internas (carpetas en app/[locale]) y su URL pública por idioma.
  // Toda ruta nueva debe registrarse aquí.
  pathnames: {
    '/': '/',
    '/projects': '/projects',
    '/contact': '/contact',
    '/networks': {
      en: '/networks',
      es: '/redes',
      fr: '/reseaux'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
