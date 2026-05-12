import type { ProjectItem } from "@/types";
import { BiMobile } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { CgComponents } from "react-icons/cg";
import { DiReact } from "react-icons/di";
import { GrOptimize } from "react-icons/gr";
import { MdDashboard, MdEmail, MdNotifications } from "react-icons/md";
import {
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiJavascript,
  SiI18Next,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const projectItems: ProjectItem[] = [
  {
    id: "1",
    title: "WRUniversal",
    description:
      "Креативная продакшн-компания с более чем 50-летней историей, специализирующаяся на создании контента для телевидения, рекламы и развлекательной индустрии.",
    imageUrl: "/wruniversal.png",
    link: "https://wruniversal.com/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React.js", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiJavascript />,
          text: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: <MdEmail />,
          text: "Email.Js",
          href: "https://www.emailjs.com/",
        },
      ],
      features: [
        {
          text: "Адаптивный дизайн с поддержкой мобильных устройств (Mobile First)",
          icon: <BiMobile size={20} />,
        },
        {
          text: "Оптимизированная производительность (Performance First)",
          icon: <GrOptimize size={20} />,
        },
        {
          text: "Модульная архитектура",
          icon: <CgComponents size={20} />,
        },
      ],
      github: "",
      difficulty: "Управлял Проектом",
      duration: "2 месяца",
      status: "Завершено",
    },
  },
  {
    id: "2",
    title: "AIPStudios",
    description:
      "Иммерсивный цифровой опыт, посвященный наследию легендарной киностудии American International Pictures. Сайт представляет собой современную витрину более чем 150 культовых фильмов, работавших с ними легенд кино и исторических достижений студии.",
    imageUrl: "/aipstudios.png",
    link: "https://aipstudios.com/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React.js", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiJavascript />,
          text: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: <MdEmail />,
          text: "Email.Js",
          href: "https://www.emailjs.com/",
        },
      ],
      features: [
        {
          text: "Адаптивный дизайн с поддержкой мобильных устройств (Mobile First)",
          icon: <BiMobile size={20} />,
        },
        {
          text: "Оптимизированная производительность (Performance First)",
          icon: <GrOptimize size={20} />,
        },
      ],
      github: "",
      difficulty: "Управлял Проектом",
      duration: "3 месяца",
      status: "Завершено",
    },
  },
  {
    id: "3",
    title: "Unco-Scanner",
    description:
      "Это многофункциональная веб-платформа нового поколения, объединяющая в себе возможности личного кабинета, e-commerce магазина и образовательного хаба",
    imageUrl: "/uncoscanner.png",
    link: "https://unco-demo.vercel.app/",
    projectDetails: {
      tags: [
        {
          icon: <TbBrandNextjs />,
          text: "Next.js",
          href: "https://nextjs.org/",
        },
        { icon: <DiReact />, text: "React.js", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiJavascript />,
          text: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: <BsFiletypeScss />,
          text: "SCSS Modules",
          href: "https://sass-lang.com/documentation/modules",
        },
        { icon: <SiVercel />, text: "Vercel", href: "https://vercel.com/" },
        {
          icon: <SiI18Next />,
          text: "i18next",
          href: "https://www.i18next.com/",
        },
        {
          icon: <SiFirebase />,
          text: "Firebase",
          href: "https://firebase.google.com/",
        },
      ],
      features: [
        {
          text: "Единый центр управления пользователем (Unified User Dashboard)",
          icon: <MdDashboard size={20} />,
        },
        {
          text: "Глубокая локализация (Global i18n)",
          icon: <SiI18Next size={20} />,
        },
        {
          text: "Персонализированные уведомления и настройки",
          icon: <MdNotifications size={20} />,
        },
      ],
      github: "",
      difficulty: "Junior",
      duration: "8 месяцев",
      status: "В процессе",
    },
  },
  {
    id: "4",
    title: "31SaaS",
    description:
      "Это высококонверсионная платформа для продажи премиального Next.js шаблона, предназначенного для быстрой разработки SaaS-продуктов.",
    imageUrl: "/31SaaS.png",
    link: "https://react-31-saas.vercel.app/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React.js", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiJavascript />,
          text: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        { icon: <SiVercel />, text: "Vercel", href: "https://vercel.com/" },
      ],
      features: [
        {
          text: "Адаптивный дизайн с поддержкой мобильных устройств (Mobile First)",
          icon: <BiMobile size={20} />,
        },
        {
          text: "Оптимизированная производительность (Performance First)",
          icon: <GrOptimize size={20} />,
        },
      ],
      github: "https://github.com/Ramazan-Yusupov/react-31Saas",
      difficulty: "Пет Проект",
      duration: "2 дня",
      status: "Завершено",
    },
  },
];
