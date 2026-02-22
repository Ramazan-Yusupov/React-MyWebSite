import { SiStackbit, SiTypescript } from "react-icons/si";
import { Card } from "../../shared/ui/Cards/Card";
import { CardLink } from "../../shared/ui/Cards/CardLink";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export function CardStack() {
  return (
    <Card
      header
      text="My Stacks"
      title="Tech Arsenal"
      className="pb-7 md:px-8 px-4"
      iconText={<SiStackbit />}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-2">
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
