import { FaPager } from "react-icons/fa6";
import { IoAppsSharp } from "react-icons/io5";
import { MdDesignServices, MdWebAsset } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { RiPagesFill } from "react-icons/ri";
import { PiBrowsersDuotone } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import type { ServicesProps } from "@/types";

export const servicesItems: ServicesProps[] = [
  {
    id: 1,
    icon: <MdWebAsset size={25} />,
    title: "Разработка сайтов",
  },
  {
    id: 2,
    icon: <FaPager size={25} />,
    title: "Создание лендингов",
  },
  {
    id: 3,
    icon: <IoAppsSharp size={25} />,
    title: "Веб-приложения",
  },
  {
    id: 4,
    icon: <MdDesignServices size={25} />,
    title: "Вёрстка из Figma",
  },
  {
    id: 5,
    icon: <DiResponsive size={35} />,
    title: "Адаптивная вёрстка",
  },
  {
    id: 6,
    icon: <RiPagesFill size={25} />,
    title: "Одностраничные приложения",
  },
  {
    id: 7,
    icon: <PiBrowsersDuotone size={25} />,
    title: "Кроссбраузерность",
  },
  {
    id: 8,
    icon: <TbApi size={25} />,
    title: "Интеграция API",
  },
];
