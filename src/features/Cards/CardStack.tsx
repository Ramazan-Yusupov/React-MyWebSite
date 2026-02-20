import { SiStackbit, SiTypescript } from "react-icons/si";
import { Card } from "../../shared/ui/Cards/Card";
import { CardLink } from "../../shared/ui/Cards/CardLink";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export function CardStack() {
  return (
    <Card
      maxWidth={450}
      text="My Stacks"
      title="Tech Arsenal"
      classname="pb-10 px-8"
      iconText={<SiStackbit className="text-icon" size={20} />}
    >
      <div className="grid grid-cols-2 gap-2 pt-2">
        <CardLink
          target="_blank"
          title="Next.js"
          href="https://nextjs.org/"
          icon={<TbBrandNextjs size={24} />}
        />
        <CardLink
          target="_blank"
          title="React.js"
          href="https://react.dev/"
          icon={<FaReact size={24} />}
        />
        <CardLink
          target="_blank"
          title="JavaScript"
          href="https://www.javascript.com/"
          icon={<IoLogoJavascript size={24} />}
        />
        <CardLink
          target="_blank"
          title="TypeScript"
          href="https://www.typescriptlang.org/"
          icon={<SiTypescript size={24} />}
        />
      </div>
    </Card>
  );
}
