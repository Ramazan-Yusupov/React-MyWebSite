import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCodeBoxFill, RiGlobalFill } from "react-icons/ri";
import { BiSolidCity } from "react-icons/bi";
import type { SmallTagItemsProps } from "@/types";

export const smallTagItems: SmallTagItemsProps[] = [
  {
    id: 1,
    icon: <BiSolidCity />,
    title: "AVBInvest",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    title: "Каякент",
  },
  {
    id: 3,
    icon: <RiGlobalFill />,
    title: "Английский & Русский",
  },
  {
    id: 4,
    icon: <RiCodeBoxFill />,
    title: "Frontend Developer",
  },
  {
    id: 5,
    icon: <RiCodeBoxFill />,
    title: "Backend Developer",
  },
];
