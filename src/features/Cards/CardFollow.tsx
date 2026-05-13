import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { CARDS_CONTENT, SOCIAL_LINKS } from "@/config";
import { Card } from "@/shared/ui/Cards/Card";
import { CardLink } from "@/shared/ui/Cards/CardLink";

export function CardFollow() {
  const socialIcons = {
    telegram: <FaTelegramPlane size={24} />,
    github: <FaGithub size={24} />,
    linkedin: <FaLinkedin size={24} />,
  } as const;

  return (
    <Card
      header
      title={CARDS_CONTENT.follow.title}
      className="card-section-padding pb-10"
      iconText={<IoShareSocial />}
    >
      <div className="grid grid-cols-1 gap-2 pt-2.5 sm:grid-cols-2">
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
