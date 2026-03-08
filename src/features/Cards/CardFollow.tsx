import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { CARDS_CONTENT, SOCIAL_LINKS } from "@/config";
import { Card, CardLink } from "@/shared";

export function CardFollow() {
  const socialIcons = {
    telegram: <FaTelegramPlane size={24} />,
    github: <FaGithub size={24} />,
    linkedin: <FaLinkedin size={24} />,
  } as const;

  return (
    <Card
      header
      text={CARDS_CONTENT.follow.text}
      title={CARDS_CONTENT.follow.title}
      className="pb-7 md:px-5 px-4"
      iconText={<IoShareSocial />}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-2.5">
        {SOCIAL_LINKS.map((item) => (
          <CardLink
            key={item.id}
            target="_blank"
            title={item.title}
            href={item.href}
            className={item.className}
            icon={socialIcons[item.id]}
          />
        ))}
      </div>
    </Card>
  );
}
