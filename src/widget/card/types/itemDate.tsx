import { BsFiletypeScss, BsGithub, BsGitlab } from "react-icons/bs";
import { FaJs } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiPrisma } from "react-icons/si";
import aipstudios from "../../../shared/assets/aipstudios.png";
import wruniversal from "../../../shared/assets/wruniversal.png";
import uncoscanner from "../../../shared/assets/uncoscanner.png";
import saas from "../../../shared/assets/31SaaS.png";
import lessonEng from "../../../shared/assets/LessonEng.png";
import mirrorWorld from "../../../shared/assets/mirrorWorld.png";
import portfolio from "../../../shared/assets/portfolio.png";
import nextPizza from "../../../shared/assets/next-pizza.png";
import zustand from "../../../shared/assets/zustand.svg";

export const ItemDateWebServer = [
  {
    id: 1,
    src: uncoscanner,
    link: "https://unco-demo.vercel.app/profile",
    title: "Unco-Scanner",
    gitLink: "",
    iconGit: <BsGitlab color="#CC6699" className="mr-1" />,
    text: "Unco-Scanner — Этот интерфейс предоставляет пользователям удобный доступ к управлению своими покупками и аккаунтом, а также к разнообразным товарам в интернет-магазине.",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "SCSS",
        link: "https://sass-lang.com/",
        icon: <BsFiletypeScss color="#CC6699" size={18} />,
      },
      {
        id: 4,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
      {
        id: 6,
        language: "Zustand",
        colSpan: "max-[480px]:col-span-2",
        link: "https://github.com/pmndrs/zustand",
        icon: (
          <img
            src={zustand}
            alt="Zustand"
            style={{ width: "18px", height: "18px" }}
          />
        ),
      },
    ],
  },
  {
    id: 2,
    src: wruniversal,
    link: "https://wruniversal.com/",
    title: "WRUniversal",
    gitLink: "",
    iconGit: <BsGithub className="mr-1" />,
    text: "WRUniversal — Представляет собой платформу, посвящённую компании, занимающейся созданием высококачественного контента в области телевидения, рекламы и развлечений на протяжении более 50 лет.",
    languageContent: [
      {
        id: 1,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 2,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 3,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 4,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
  {
    id: 3,
    src: aipstudios,
    link: "https://aipstudios.com/",
    title: "Aip Studios",
    gitLink: "",
    iconGit: <BsGithub className="mr-1" />,
    text: "Aip Studios — Сайт демонстрирует достижения AIP Studios в киноиндустрии, акцентирует внимание на качестве продукции и предлагает возможности для сотрудничества с потенциальными партнёрами и инвесторами.",
    languageContent: [
      {
        id: 1,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 2,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 3,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 4,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
];

export const ItemDate = [
  {
    id: 1,
    src: saas,
    link: "https://31-saa-s.vercel.app/",
    title: "31SaaS",
    text: "31SaaS — это готовый шаблон (boilerplate) на базе Next.js 14, который позволяет быстро создать современное, функциональное и красивое SaaS-приложение (Software as a Service). Это не просто минимальный прототип (MVP), а полноценный стартовый набор для реального продукта.",
    gitLink: "https://github.com/ramyus889/31SaaS",
    iconGit: <BsGithub className="mr-1" />,
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 4,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
  {
    id: 2,
    src: lessonEng,
    link: "https://lesson-english2-two.vercel.app/",
    title: "Lesson English",
    text: "Набор базовых английских предложений и слов с переводом. Темы: работа, еда, отель, ключи, поддержка, понимание, желания, видения и т.д. Каждое предложение или слово дублируется на русском для удобства изучения. Примеры включают как простые утверждения, так и конструкции с местоимениями и глаголами.",
    gitLink: "https://github.com/ramyus889/LessonEnglish2",
    iconGit: <BsGithub className="mr-1" />,
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 4,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
  {
    id: 3,
    src: mirrorWorld,
    link: "https://mirror-world-seven.vercel.app/",
    title: "Mirror World",
    text: "Be Smart, Make More — умное решение для большего заработка. Frictionless development with NFT Marketplace, Fiat-to-NFT, Crypto On-Ramp, Auth and Wallet — беспрепятственная разработка с маркетплейсом NFT, конвертацией фиатных денег в NFT, крипто-онрампом, аутентификацией и кошельком.",
    gitLink: "https://github.com/ramyus889/MirrorWorld",
    iconGit: <BsGithub className="mr-1" />,
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 4,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
  {
    id: 4,
    src: portfolio,
    link: "https://personalwebfrontend.vercel.app/",
    title: "Portfolio",
    text: "Брендинг и Стек Технологий Tech Arsenal — название проекта/компании. Используемые инструменты и платформы: Framer, Webflow, Figma, Shopify. Акцент на современные no-code/low-code платформы и дизайн-инструменты. Портфолио и Галерея Работ Галерея проектов с возможностью просмотра (View Works).",
    gitLink: "https://github.com/ramyus889/portfolio",
    iconGit: <BsGithub className="mr-1" />,
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 4,
        language: "TypeScript",
        colSpan: "min-[480px]:col-span-2",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        colSpan: "max-[480px]:col-span-2",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
    ],
  },
  {
    id: 5,
    src: nextPizza,
    link: "https://next-js-pizza-sigma.vercel.app/",
    title: "Next Pizza",
    text: "Это классический пример меню для сайта пиццерии с возможностью выбора пиццы, завтраков, закусок, коктейлей и напитков с фильтрами по тесту, размеру, цене и ингредиентам. Очень похоже на интерфейс и структуру сайта Додо Пиццы, но с вашим брендом Next Pizza.",
    gitLink: "https://github.com/ramyus889/Next.js-Pizza",
    iconGit: <BsGithub className="mr-1" />,
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={23} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={23} />,
      },
      {
        id: 3,
        language: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss color="#38B2AC" size={23} />,
      },
      {
        id: 4,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={18} />,
      },
      {
        id: 5,
        language: "JavaScript",
        link: "https://www.javascript.com/",
        icon: <FaJs color="#F7DF1E" size={18} />,
      },
      {
        id: 6,
        language: "Prisma",
        link: "https://www.prisma.io/",
        icon: <SiPrisma color="#007ACC" size={18} />,
      },
    ],
  },
];
