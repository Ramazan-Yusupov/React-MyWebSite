import { SiI18Next } from "react-icons/si";
import { FaGithub, FaGitlab } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { RiToolsLine } from "react-icons/ri";
import { CARDS_CONTENT } from "@/config";
import { Card } from "@/shared/ui/Cards/Card";
import { CardLink } from "@/shared/ui/Cards/CardLink";

export function CardStack() {
  return (
    <Card
      header
      title={CARDS_CONTENT.stack.title}
      className="card-section-padding"
      iconText={<RiToolsLine />}
    >
      <div className="grid grid-cols-1 gap-2 py-2.5 sm:grid-cols-2">
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
