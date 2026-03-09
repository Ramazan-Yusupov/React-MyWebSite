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
      className="px-4 pb-4 md:px-5"
      iconText={<SiStackbit />}
    >
      <div className="scrollHidden mt-2 flex max-h-70 flex-col gap-2 overflow-y-scroll max-2xl:max-h-78">
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
