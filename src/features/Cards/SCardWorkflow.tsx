import { CARDS_CONTENT } from "@/config";
import { Card, Skeleton } from "@/shared";
import { SiStackbit } from "react-icons/si";

export function SCardWorkflow() {
  return (
    <Card
      header
      title={CARDS_CONTENT.workflow.title}
      className="px-4 pb-4 md:px-5"
      iconText={<SiStackbit />}
    >
      <div className="scrollHidden mt-2 flex max-h-70 flex-col gap-2 overflow-y-scroll max-2xl:max-h-78">
        <Skeleton className="h-20 w-full" count={9} />
      </div>
    </Card>
  );
}
