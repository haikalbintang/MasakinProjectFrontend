"use client";

import Image from "next/image";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon = ({ src, alt }: SocialIconProps) => {
  return (
    <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[10px] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)]">
      <Image src={src} alt={alt} width={30} height={30} />
    </div>
  );
};

export default SocialIcon;
