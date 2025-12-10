import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { DiTrello } from "react-icons/di";
import { IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import hhLogo from "../../shared/assets/hhLogo.png";
import frontendLogo from "../../shared/assets/frontend.jpg";
import { cn } from "../../lib/utils";

const navItems = [
  {
    id: "1",
    icon: <AiOutlineHome size={30} />,
    href: "/",
    external: false,
  },
  {
    id: "2",
    icon: <DiTrello size={30} />,
    href: "/level",
    external: false,
  },
  {
    id: "3",
    icon: <IoMdContact size={30} />,
    href: "/profile",
    external: false,
  },
  {
    id: "4",
    icon: <img src={hhLogo} alt="hh" className="w-7.5 h-7.5" />,
    href: "https://hh.ru/resume/4e612b5bff0f72d5ee0039ed1f48755430584a",
    external: true,
  },
  {
    id: "5",
    icon: <BsGithub size={30} className="text-white" />,
    href: "https://github.com/ramyus889",
    external: true,
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 -right-62 pt-5 max-w-80 w-full ps-2 z-1000 transition-all duration-300 ease-in-out",
        isOpen && "-right-1"
      )}
    >
      <div className="border-2 border-r-0 rounded-l-full h-13 flex bg-black ps-[6px] items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={frontendLogo}
            alt="frontend"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </button>

        <div className="flex items-center gap-4 ml-[4px] mr-[1px]">
          {navItems
            .filter((item) => !item.external)
            .map(({ id, icon, href }) => (
              <NavLink
                key={id}
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white transition-colors"
                }
              >
                {icon}
              </NavLink>
            ))}
        </div>

        <div className="w-[2px] h-12 bg-gray-300"></div>

        <div className="flex items-center gap-4 ml-[5px]">
          {navItems
            .filter((item) => item.external)
            .map(({ id, icon, href }) => (
              <NavLink
                key={id}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {icon}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};
