import { CardStatistick } from "@/shared";
import { FaFlag } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";

export function CardStatContainer() {
  return (
    <div className="column-gap-5">
      <CardStatistick text="Проекты" num={6} icon={<GoProjectRoadmap />} />
      <CardStatistick text="Года опыта" num={3} icon={<FaFlag />} />
    </div>
  );
}
