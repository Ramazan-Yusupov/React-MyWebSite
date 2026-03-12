type SizeVariant = "xl" | "md" | "sm";

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
  longDescription?: string; // Подробное описание для страницы деталей
  imageUrl: string;
  gallery?: string[]; // Дополнительные скриншоты
  link: string;
  projectDetails: {
    tags: { icon: React.ReactNode; text: string; href: string }[];
    features: string[];
    challenges: string[];
    lessonsLearned?: string[]; // Что изучил в процессе
    github: string;
    difficulty: "Junior" | "Middle" | "Senior"; // Уровень сложности
    duration: string; // "3 месяца", "2 недели" и т.д.
    role: string; // "Full Stack", "Frontend", "UI/UX"
    status: "Completed" | "In Progress" | "Planning";
    techStack?: string[]; // Для отображения в виде текста
    metrics?: {
      performance?: string; // "95 Lighthouse"
      users?: string; // "10k+ users"
      commits?: string; // "150+ commits"
    };
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
  text?: string;
  href?: string;
  title?: string;
  header?: boolean;
  maxWidth?: number;
  linkTitle?: string;
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
  height?: SizeVariant;
  icon: React.ReactNode;
  iconArrowRight?: boolean;
}

export interface CardProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface CardStatProps {
  num: number;
  text: string;
  icon: React.ReactNode;
}

export interface IconProps {
  height?: SizeVariant;
  icon: React.ReactNode;
}

export interface BigTagProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}
export interface SmallTagProps {
  id?: number;
  href: string;
  title: string;
  icon: React.ReactNode;
  className?: string;
}
