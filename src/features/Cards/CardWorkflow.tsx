import { SiStackbit } from "react-icons/si";
import { CARDS_CONTENT } from "@/config";
import { frameworkItems } from "@/mockApi";
import { Card, CardLink } from "@/shared";

export function CardWorkflow() {
  return (
    <Card
      header
      text={CARDS_CONTENT.workflow.text}
      title={CARDS_CONTENT.workflow.title}
      className="pb-4 md:px-5 px-4"
      iconText={<SiStackbit />}
    >
      <div className="flex flex-col gap-2 mt-2 overflow-y-scroll max-h-70 max-[1700px]:max-h-78 scrollHidden">
        {frameworkItems.map((item) => (
          <CardLink
            key={item.id}
            height="md"
            target="_blank"
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </Card>
  );
}
