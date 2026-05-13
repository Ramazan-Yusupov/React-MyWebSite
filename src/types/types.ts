type SizeVariant = "xl" | "md" | "sm";

export type AvatarSize = "sm" | "md" | "lg";

export interface FrameProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  typeProject: string;
  projectDetails: {
    tags: { icon: React.ReactNode; text: string; href: string }[];
    features: {
      text: string;
      icon: React.ReactNode;
    }[];
    github: string;
    difficulty:
      | "Пет Проект"
      | "Управлял Проектом"
      | "Junior"
      | "Middle"
      | "Senior"; // Уровень сложности
    duration: string; // "3 месяца", "2 недели" и т.д.
    status: "Завершено" | "В процессе" | "Планирование";
  };
}

export interface ServicesProps {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface ButtonProps {
  href?: string;
  title: string;
  icon?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  title?: string;
  header?: boolean;
  maxWidth?: number;
  className?: string;
  iconText?: React.ReactNode;
  children: React.ReactNode;
}

export interface CardLinkProps {
  tag?: string;
  href?: string;
  title: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
  size?: SizeVariant;
  icon: React.ReactNode;
  iconArrowRight?: boolean;
}

export interface CardProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  typeProject: string;
}

export interface CardStatProps {
  num: number;
  text: string;
  icon: React.ReactNode;
}

export interface IconProps {
  size?: SizeVariant;
  icon: React.ReactNode;
  className?: string;
}

export interface BigTagProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export interface AvatarProps {
  src?: string;
  alt: string;
  editable?: boolean;
  size?: AvatarSize;
  className?: string;
  onImageChange?: (file: File | null) => void;
}

export interface SmallTagProps {
  id?: number;
  href?: string;
  title: string;
  icon: React.ReactNode;
  className?: string;
}
