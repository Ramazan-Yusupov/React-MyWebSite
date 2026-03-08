import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import type { FrameProps } from "@/types";

export const frameworkItems: FrameProps[] = [
  {
    id: 1,
    icon: <TbBrandNextjs size={24} />,
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    id: 2,
    icon: <TbBrandReact size={24} />,
    title: "React.js",
    href: "https://react.dev/",
  },
  {
    id: 3,
    icon: <TbBrandRedux size={24} />,
    title: "Redux, RTK, RTK-Query",
    href: "https://redux.js.org/",
  },
  {
    id: 4,
    icon: <TbBrandTypescript size={24} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    icon: <FaJsSquare size={24} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 6,
    icon: <RiTailwindCssFill size={24} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    id: 7,
    icon: <BsFiletypeScss size={24} />,
    title: "SCSS",
    href: "https://sass-lang.com/",
  },
  {
    id: 8,
    icon: <IoLogoCss3 size={24} />,
    title: "css",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 9,
    icon: <FaHtml5 size={24} />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
];
