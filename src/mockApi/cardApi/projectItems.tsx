import type { ProjectItem } from "@/types";
import { DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiVercel,
  SiGraphql,
  SiFirebase,
  SiFramer,
  SiThreedotjs,
} from "react-icons/si";

export const projectItems: ProjectItem[] = [
  {
    id: "1",
    title: "WRUniversal",
    description:
      "Многофункциональная e-commerce платформа с адаптивным дизайном",
    longDescription:
      "Полноценный интернет-магазин с каталогом товаров, корзиной, системой заказов и личным кабинетом пользователя. Проект разработан с фокусом на производительность, доступность и современный пользовательский опыт.",
    imageUrl: "/wruniversal.png",
    gallery: ["/wruniversal-1.png", "/wruniversal-2.png", "/wruniversal-3.png"],
    link: "https://wruniversal.com/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        { icon: <SiNodedotjs />, text: "Node.js", href: "https://nodejs.org/" },
        {
          icon: <SiPostgresql />,
          text: "PostgreSQL",
          href: "https://www.postgresql.org/",
        },
      ],
      features: [
        "Адаптивный дизайн с поддержкой мобильных устройств (Mobile First)",
        "Динамическая фильтрация и сортировка товаров с сохранением состояния URL",
        "Интеграция с платежной системой и безопасное оформление заказа",
        "Оптимизация Core Web Vitals: LCP < 2.5s, CLS < 0.1",
        "Реализация темной темы с сохранением предпочтений пользователя",
      ],
      challenges: [
        "Оптимизация рендеринга больших списков товаров с виртуализацией",
        "Реализация сложной логики корзины с синхронизацией между вкладками",
        "Обеспечение безопасности форм и защита от XSS/CSRF атак",
      ],
      lessonsLearned: [
        "Глубокое понимание оптимизации производительности React-приложений",
        "Опыт работы с серверным рендерингом и SEO-оптимизацией",
        "Навыки отладки и профилирования веб-приложений",
      ],
      github: "https://github.com/yourusername/wruniversal",
      difficulty: "Senior",
      duration: "4 месяца",
      role: "Frontend Lead",
      status: "Completed",
      techStack: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Query",
      ],
      metrics: {
        performance: "98 Lighthouse",
        users: "5k+ monthly",
        commits: "200+",
      },
    },
  },
  {
    id: "2",
    title: "AIPStudios",
    description:
      "Креативная платформа для генерации контента с использованием AI",
    longDescription:
      "Веб-приложение, позволяющее пользователям создавать изображения, тексты и видео с помощью искусственного интеллекта. Интуитивный интерфейс и мощные инструменты для креативных профессионалов.",
    imageUrl: "/aipstudios.png",
    gallery: ["/aipstudios-1.png", "/aipstudios-2.png"],
    link: "https://aipstudios.com/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        { icon: <SiGraphql />, text: "GraphQL", href: "https://graphql.org/" },
        {
          icon: <SiFirebase />,
          text: "Firebase",
          href: "https://firebase.google.com/",
        },
      ],
      features: [
        "Интеграция с AI API для генерации изображений и текста в реальном времени",
        "Drag-and-drop редактор с предпросмотром результатов",
        "Система проектов и истории генераций с возможностью экспорта",
        "Оптимистичные обновления UI для мгновенного отклика интерфейса",
        "Поддержка множественных языков и локализация интерфейса",
      ],
      challenges: [
        "Обработка долгих запросов к AI с индикаторами прогресса и отменой",
        "Управление состоянием сложных форм с валидацией в реальном времени",
        "Оптимизация загрузки и кэширования больших медиафайлов",
      ],
      lessonsLearned: [
        "Работа с асинхронными потоками данных и WebSockets",
        "Проектирование устойчивых к ошибкам пользовательских сценариев",
        "Опыт интеграции сторонних AI-сервисов",
      ],
      github: "https://github.com/yourusername/aipstudios",
      difficulty: "Senior",
      duration: "3 месяца",
      role: "Full Stack Developer",
      status: "Completed",
      techStack: [
        "React",
        "TypeScript",
        "GraphQL",
        "Firebase",
        "Framer Motion",
      ],
      metrics: {
        performance: "94 Lighthouse",
        users: "2k+ active",
        commits: "180+",
      },
    },
  },
  {
    id: "3",
    title: "Unco-Scanner",
    description:
      "Инструмент для анализа и визуализации данных в реальном времени",
    longDescription:
      "Дашборд для мониторинга метрик с интерактивными графиками, фильтрами и экспортом отчетов. Предназначен для аналитиков и команд, работающих с большими объемами данных.",
    imageUrl: "/uncoscanner.png",
    gallery: ["/uncoscanner-1.png", "/uncoscanner-2.png", "/uncoscanner-3.png"],
    link: "https://unco-demo.vercel.app/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        { icon: <SiRedis />, text: "Redis", href: "https://redis.io/" },
        { icon: <SiDocker />, text: "Docker", href: "https://www.docker.com/" },
      ],
      features: [
        "Интерактивные графики с библиотекой Recharts и кастомными тултипами",
        "Real-time обновления данных через WebSocket соединение",
        "Гибкая система фильтров с сохранением пресетов",
        "Экспорт отчетов в PDF/CSV с кастомным оформлением",
        "Поддержка темной темы и адаптивная верстка для любых экранов",
      ],
      challenges: [
        "Оптимизация рендеринга графиков с тысячами точек данных",
        "Реализация эффективного кэширования и дедупликации запросов",
        "Обеспечение плавной анимации при обновлении данных в реальном времени",
      ],
      lessonsLearned: [
        "Глубокое понимание работы с WebSocket и real-time архитектурой",
        "Оптимизация производительности визуализации больших данных",
        "Навыки работы с Canvas и SVG для кастомных графиков",
      ],
      github: "https://github.com/yourusername/unco-scanner",
      difficulty: "Middle",
      duration: "2.5 месяца",
      role: "Frontend Developer",
      status: "Completed",
      techStack: ["React", "TypeScript", "Recharts", "WebSocket", "Tailwind"],
      metrics: {
        performance: "96 Lighthouse",
        commits: "150+",
      },
    },
  },
  {
    id: "4",
    title: "31SaaS",
    description: "SaaS-платформа для управления задачами и командной работы",
    longDescription:
      "Минималистичный, но мощный инструмент для планирования задач, трекинга времени и коллаборации. С фокусом на простоту использования и скорость работы.",
    imageUrl: "/31SaaS.png",
    gallery: ["/31saas-1.png", "/31saas-2.png"],
    link: "https://31-saa-s.vercel.app/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: <SiFirebase />,
          text: "Zustand",
          href: "https://zustand-demo.pmnd.rs/",
        },
        { icon: <SiVercel />, text: "Vercel", href: "https://vercel.com/" },
      ],
      features: [
        "Kanban-доска с drag-and-drop перемещением задач (dnd-kit)",
        "Система уведомлений в реальном времени с настройкой предпочтений",
        "Интеграция календаря с возможностью синхронизации с Google Calendar",
        "Оффлайн-режим с синхронизацией при восстановлении соединения",
        "Быстрый поиск по задачам с подсветкой результатов и фильтрами",
      ],
      challenges: [
        "Реализация сложной логики drag-and-drop с валидацией перемещений",
        "Синхронизация состояния между клиентом и сервером в оффлайн-режиме",
        "Оптимизация начальной загрузки приложения с code-splitting",
      ],
      lessonsLearned: [
        "Опыт построения масштабируемой архитектуры состояния приложения",
        "Работа с Service Workers и стратегиями кэширования",
        "Проектирование доступного интерфейса (a11y) для drag-and-drop",
      ],
      github: "https://github.com/yourusername/31saas",
      difficulty: "Senior",
      duration: "5 месяцев",
      role: "Full Stack Developer",
      status: "In Progress",
      techStack: [
        "React",
        "TypeScript",
        "Zustand",
        "dnd-kit",
        "Vercel Edge Functions",
      ],
      metrics: {
        performance: "97 Lighthouse",
        commits: "250+",
      },
    },
  },
  {
    id: "5",
    title: "LessonEnglish",
    description: "Интерактивная платформа для изучения английского языка",
    longDescription:
      "Образовательное приложение с уроками, упражнениями, прогресс-трекингом и геймификацией. Создано для эффективного и увлекательного изучения языка.",
    imageUrl: "/LessonEng.png",
    gallery: ["/lessoneng-1.png", "/lessoneng-2.png", "/lessoneng-3.png"],
    link: "https://lesson-english2-two.vercel.app/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: <SiFramer />,
          text: "Framer Motion",
          href: "https://www.framer.com/motion/",
        },
        {
          icon: <SiFirebase />,
          text: "Firebase",
          href: "https://firebase.google.com/",
        },
      ],
      features: [
        "Интерактивные упражнения с мгновенной проверкой и объяснением ошибок",
        "Система прогресса с визуализацией достижений и уровнями",
        "Аудио-произношение с записью и сравнением через Web Speech API",
        "Адаптивная сложность заданий на основе успеваемости пользователя",
        "Геймификация: бейджи, стрики, ежедневные челленджи",
      ],
      challenges: [
        "Интеграция Web Speech API с кроссбраузерной совместимостью",
        "Реализация плавных анимаций для улучшения вовлеченности",
        "Проектирование адаптивной системы оценки прогресса",
      ],
      lessonsLearned: [
        "Работа с медиа-API браузера и обработка аудио-потоков",
        "Проектирование геймифицированного пользовательского опыта",
        "Оптимизация обучения на мобильных устройствах",
      ],
      github: "https://github.com/yourusername/lesson-english",
      difficulty: "Middle",
      duration: "3 месяца",
      role: "Frontend Developer",
      status: "Completed",
      techStack: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Firebase",
        "Web Speech API",
      ],
      metrics: {
        performance: "95 Lighthouse",
        users: "1k+ learners",
        commits: "130+",
      },
    },
  },
  {
    id: "6",
    title: "MirrorWorld",
    description: "Иммерсивный 3D-портфолио с интерактивными эффектами",
    longDescription:
      "Экспериментальный проект, демонстрирующий возможности WebGL и современных анимаций в браузере. Интерактивное пространство для презентации работ и навыков.",
    imageUrl: "/mirrorWorld.png",
    gallery: ["/mirrorworld-1.png", "/mirrorworld-2.png"],
    link: "https://mirror-world-seven.vercel.app/",
    projectDetails: {
      tags: [
        { icon: <DiReact />, text: "React", href: "https://react.dev/" },
        {
          icon: <SiTypescript />,
          text: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiTailwindcss />,
          text: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: <SiFramer />,
          text: "Framer Motion",
          href: "https://www.framer.com/motion/",
        },
        {
          icon: <SiThreedotjs />,
          text: "Three.js",
          href: "https://threejs.org/",
        },
      ],
      features: [
        "3D-сцена с интерактивными объектами на основе Three.js и React Three Fiber",
        "Плавные переходы между секциями с параллакс-эффектами",
        "Адаптивная производительность: автоматическое снижение качества на слабых устройствах",
        "Кастомный курсор и микро-интеракции для улучшения тактильности",
        "Оптимизированная загрузка ассетов с прогресс-баром и lazy-loading",
      ],
      challenges: [
        "Балансировка визуальной сложности и производительности на мобильных устройствах",
        "Синхронизация 3D-анимаций с скроллом и пользовательскими взаимодействиями",
        "Оптимизация размера бандла с динамической загрузкой тяжелых ресурсов",
      ],
      lessonsLearned: [
        "Глубокое понимание WebGL и оптимизации 3D-рендеринга в браузере",
        "Работа с шейдерами и кастомными материалами",
        "Проектирование доступного опыта для пользователей с ограниченными возможностями",
      ],
      github: "https://github.com/yourusername/mirror-world",
      difficulty: "Senior",
      duration: "2 месяца",
      role: "Creative Developer",
      status: "Completed",
      techStack: ["React", "TypeScript", "Three.js", "Framer Motion", "GSAP"],
      metrics: {
        performance: "90 Lighthouse",
        commits: "100+",
      },
    },
  },
];
