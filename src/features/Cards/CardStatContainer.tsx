import { CardStatistic } from "@/shared";
import { FaFlag } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";

export function CardStatContainer() {
  return (
    <div className="column-gap-5">
      <CardStatistic text="Проекты" num={6} icon={<GoProjectRoadmap />} />
      <CardStatistic text="Года опыта" num={3} icon={<FaFlag />} />
    </div>
  );
}
