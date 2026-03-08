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
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
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
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
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
