import { SiI18Next } from "react-icons/si";
import { FaGithub, FaGitlab } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { RiToolsLine } from "react-icons/ri";
import { CARDS_CONTENT } from "@/config";
import { Card, CardLink } from "@/shared";

export function CardStack() {
  return (
    <Card
      header
      text={CARDS_CONTENT.stack.text}
      title={CARDS_CONTENT.stack.title}
      className="pb-7 md:px-5 px-4"
      iconText={<RiToolsLine />}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-2">
        <CardLink
          target="_blank"
          title="GitHub"
          href="https://github.com/"
          icon={<FaGithub size={24} />}
        />
        <CardLink
          target="_blank"
          title="Gitlab"
          href="https://gitlab.com/"
          icon={<FaGitlab size={24} />}
        />
        <CardLink
          target="_blank"
          title="Figma"
          href="https://www.figma.com/"
          icon={<FiFigma size={24} />}
        />
        <CardLink
          target="_blank"
          title="i18n"
          href="https://www.i18next.com/"
          icon={<SiI18Next size={24} />}
        />
      </div>
    </Card>
  );
}
