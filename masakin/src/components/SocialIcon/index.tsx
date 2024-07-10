"use client"

import Image from "next/image";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon = ({ src, alt }: SocialIconProps) => {
  return <Image src={src} alt={alt} width={30} height={30} />;
};

export default SocialIcon;
