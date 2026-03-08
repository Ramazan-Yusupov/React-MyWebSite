import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCodeBoxFill, RiGlobalFill } from "react-icons/ri";
import { BiSolidCity } from "react-icons/bi";
import type { SmallTagProps } from "@/types";

export const smallTagItems: SmallTagProps[] = [
  {
    id: 1,
    href: "https://avbinvest.com/",
    icon: <BiSolidCity />,
    title: "AVBInvest",
  },
  {
    id: 2,
    href: "#",
    icon: <FaMapMarkerAlt />,
    title: "Каякент",
  },
  {
    id: 3,
    href: "#",
    icon: <RiGlobalFill />,
    title: "Английский & Русский",
  },
  {
    id: 4,
    href: "#",
    icon: <RiCodeBoxFill />,
    title: "Frontend Developer",
  },
  {
    id: 5,
    href: "#",
    icon: <RiCodeBoxFill />,
    title: "Backend Developer",
  },
];
