import type { ProjectItem } from "@/types";
import { InfinityIcon, LoaderIcon } from "lucide-react";
import { BiCard, BiMobile } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { CgBoard, CgComponents } from "react-icons/cg";
import { DiReact } from "react-icons/di";
import { GrLocal, GrOptimize } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import {
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiJavascript,
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
    typeProject: "Коммерческий сайт",
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
    typeProject: "Коммерческий сайт",
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
    title: "Planora-Board",
    typeProject: "Пет-проект",
    description:
      "Planora Board — веб-приложение типа канбан/доска задач для личного или командного планирования. Пользователи создают доски, списки и карточки; прикрепляют файлы, ставят метки и чек-листы; используют шаблоны и локальные рабочие пространства для сохранения данных. Для тех, кто не понимает, что делает сайт (простыми словами)",
    imageUrl: "/planora.png",
    link: "https://planora-board.vercel.app/",
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
          text: "Оптимизированная производительность (Performance First)",
          icon: <GrOptimize size={20} />,
        },
        {
          text: "Создание досок/колонок/карточек",
          icon: <CgBoard size={20} />,
        },
        {
          text: "Карточки с заголовком, описанием, метками, чек-листами и файлами",
          icon: <BiCard size={20} />,
        },
        {
          text: "Хранение: локально + Folder Workspace (File System Access API), экспорт/импорт JSON",
          icon: <GrLocal size={20} />,
        },
        {
          text: "Модули: шаблоны досок, lazy loading",
          icon: <LoaderIcon size={20} />,
        },
      ],
      github: "https://github.com/Ramazan-Yusupov/planora-board",
      difficulty: "Пет Проект",
      duration: "2 месяца",
      status: "Завершено",
    },
  },
  {
    id: "4",
    title: "DrawTool",
    typeProject: "Пет-проект",
    description:
      "DrawTool — интерактивная бесконечная доска для схем, заметок, диаграмм и свободного рисования. Проект самостоятельно реализует привычные сценарии редакторов наподобие Excalidraw и Figma: создание фигур, редактирование текста, перемещение, поворот, выравнивание, работа со слоями и сохранение сцены.",
    imageUrl: "/drawtool.png",
    link: "https://draw-tool-ten.vercel.app/",
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
          text: "Оптимизированная производительность (Performance First)",
          icon: <GrOptimize size={20} />,
        },
        {
          text: "Бесконечный холст, пан/зум, сетка, привязка к сетке",
          icon: <InfinityIcon size={20} />,
        },
        {
          text: "Инструменты: фигуры, стрелки, текст, free-draw, ластик, слои, undo/redo",
          icon: <BsTools size={20} />,
        },
      ],
      github: "https://github.com/Ramazan-Yusupov/DrawTool",
      difficulty: "Пет Проект",
      duration: "2 месяца",
      status: "Завершено",
    },
  },
];
