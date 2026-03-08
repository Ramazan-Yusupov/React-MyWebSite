export const CONTACT_LINKS = {
  telegram: {
    title: "Telegram",
    href: "https://web.telegram.org/k/#@frontend747",
  },
  whatsapp: {
    title: "WhatsApp",
    href: "https://wa.me/79604138833",
  },
  github: {
    title: "GitHub",
    href: "https://github.com/Ramazan-Yusupov",
  },
  linkedin: {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/ramazan747/",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    id: "telegram",
    title: "@frontend747",
    href: CONTACT_LINKS.telegram.href,
    className: "",
  },
  {
    id: "github",
    title: CONTACT_LINKS.github.title,
    href: CONTACT_LINKS.github.href,
    className: "",
  },
  {
    id: "linkedin",
    title: CONTACT_LINKS.linkedin.title,
    href: CONTACT_LINKS.linkedin.href,
    className: "sm:col-span-2",
  },
] as const;
