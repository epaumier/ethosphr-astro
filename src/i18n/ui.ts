import { useSanityClient } from "@sanity/astro";

const pages = await useSanityClient().fetch(`*[_type == "page" && language == "fr"] {
    title,
    subtitle,
    language,
  }
`);

const pagesEn = await useSanityClient().fetch(`*[_type == "page" && language == "en"] {
  title,
  subtitle,
  language,
}
`);


const u = pagesEn.filter(p => p.title === "Missions")[0].title;

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.expertise': 'Expertise',
    'nav.missions': 'Missions',
    'nav.contribute': 'Contribute',
    'nav.contribute.adherer': 'Membership',
    'nav.team': 'Our team',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'page.contact.title': 'Contact',
    'page.contact.desc': 'We are a here to help.',
    'page.contact.form.name': 'Full name',
    'page.contact.form.email': 'Email',
    'page.contact.form.message': 'Your message',
    'page.contact.form.send': 'Send Message',
    'page.missions.title': pagesEn.filter(p => p.title === "Missions")[0].title,
    'page.missions.subtitle': pagesEn.filter(p => p.title === "Missions")[0].subtitle,

  },
  fr: {
    'nav.home': 'Accueil',
    'nav.expertise': 'Expertises',
    'nav.missions': 'Missions',
    'nav.contribute': 'Participer',
    'nav.contribute.adherer': 'Adhérer',
    'nav.team': 'Notre équipe',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'page.contact.title': 'Formulaire de contact',
    'page.contact.desc': 'Envoyez nous un message.',
    'page.contact.form.name': 'Nom et prénom',
    'page.contact.form.email': 'Email',
    'page.contact.form.message': 'Message',
    'page.contact.form.send': 'Envoyer le message',
    'page.missions.title': pages.filter(p => p.title === "Missions")[0].title,
    'page.missions.subtitle': pages.filter(p => p.title === "Missions")[0].subtitle,
  },
} as const;