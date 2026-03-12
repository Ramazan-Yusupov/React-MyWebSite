import type { FeatureIconKey } from "@/config/features-icons";

export interface ProjectDetailsProps {
  projectId: string;
}

export interface ProjectHeaderProps {
  projectLink: string;
}

export interface ProjectHeroProps {
  imageUrl: string;
  alt: string;
  height?: "sm" | "md" | "lg";
}

export interface TechTag {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export interface ProjectInfoProps {
  title: string;
  description: string;
  tags: TechTag[];
}

export interface FeatureItem {
  id?: string;
  text: string;
  iconKey?: FeatureIconKey;
}

export interface ProjectStat {
  label: string;
  value: string | React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
}
