import { SiStackbit } from "react-icons/si";
import { Card } from "../../shared/ui/Cards/Card";
import { CardLink } from "../../shared/ui/Cards/CardLink";
import { frameworkItems } from "@/mockApi/frameworkItem";

export function CardWorkflow() {
  return (
    <Card
      header
      text="My Frameworks"
      title="Frameworks"
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
