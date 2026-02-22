import { Card } from "../../shared/ui/Cards/Card";
import { CardLink } from "../../shared/ui/Cards/CardLink";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

export function CardFollow() {
  return (
    <Card
      header
      text="Follow Me"
      title="Social Media"
      className="pb-7 md:px-5 px-4"
      iconText={<IoShareSocial />}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-2.5">
        <CardLink
          target="_blank"
          title="@frontend747"
          href="https://web.telegram.org/k/#@frontend747"
          icon={<FaTelegramPlane size={24} />}
        />
        <CardLink
          target="_blank"
          title="GitHub"
          href="https://github.com/Ramazan-Yusupov"
          icon={<FaGithub size={24} />}
        />
        <CardLink
          target="_blank"
          title="Linkedin"
          className="sm:col-span-2"
          href="https://www.linkedin.com/in/ramazan747/"
          icon={<FaLinkedin size={24} />}
        />
      </div>
    </Card>
  );
}
