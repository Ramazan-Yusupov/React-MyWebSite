import { CardStatistick } from "@/shared/ui/Cards/CardStatistick";
import { FaFlag } from "react-icons/fa6";

export function CardStatContainer() {
  return (
    <div className="flex gap-5">
      <CardStatistick text="Projects" num={56} icon={<FaFlag />} />
      <CardStatistick text="Happy Clients" num={23} icon={<FaFlag />} />
      <CardStatistick text="Year Expertise" num={6} icon={<FaFlag />} />
    </div>
  );
}
