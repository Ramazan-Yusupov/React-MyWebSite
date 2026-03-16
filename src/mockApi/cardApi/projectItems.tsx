import type { ProjectItem } from "@/types";
import { BiMobile } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { CgComponents, CgSearchLoading } from "react-icons/cg";
import { DiReact } from "react-icons/di";
import { GiLevelTwo } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { LuComponent } from "react-icons/lu";
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
      status: "Completed",
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
      status: "Completed",
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
      status: "In Progress",
    },
  },
  {
    id: "4",
    title: "31SaaS",
    description:
      "Это высококонверсионная платформа для продажи премиального Next.js шаблона, предназначенного для быстрой разработки SaaS-продуктов.",
    imageUrl: "/31SaaS.png",
    link: "https://31-saa-s.vercel.app/",
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
      github: "https://github.com/ramyus889/31SaaS",
      difficulty: "Пет Проект",
      duration: "4 дня",
      status: "Completed",
    },
  },
  {
    id: "5",
    title: "LessonEnglish",
    description:
      "Это полноценное образовательное веб-приложение (EdTech) с интерактивными уроками, тестами и системой прогресса",
    imageUrl: "/LessonEng.png",
    link: "https://lesson-english2-two.vercel.app/",
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
        {
          text: "Интерактивные сценарии обучения",
          icon: <LuComponent size={20} />,
        },
        {
          text: "Структурированная навигация по уровням",
          icon: <GiLevelTwo size={20} />,
        },
      ],
      github: "https://github.com/ramyus889/LessonEnglish2",
      difficulty: "Пет Проект",
      duration: "2 месяца",
      status: "In Progress",
    },
  },
  {
    id: "6",
    title: "MirrorWorld",
    description:
      "Это яркий представитель жанра Web3 / NFT-проектов или Immersive Storytelling. Такие сайты требуют особого подхода к производительности, так как они обычно перегружены сложной графикой, 3D-элементами, анимациями и интерактивными картами.",
    imageUrl: "/mirrorWorld.png",
    link: "https://mirror-world-seven.vercel.app/",
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
        {
          text: "Бесшовное повествование (Seamless Storytelling)",
          icon: <CgSearchLoading size={20} />,
        },
      ],
      github: "https://github.com/ramyus889/MirrorWorld",
      difficulty: "Пет Проект",
      duration: "1 Неделя",
      status: "Completed",
    },
  },
];
