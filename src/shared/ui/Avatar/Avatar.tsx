interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="w-32.5 rounded-xl" />;
}
