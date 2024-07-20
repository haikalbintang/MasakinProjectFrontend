"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackArrow() {
  const router = useRouter();
  return (
    <div className="absolute left-7 top-4 cursor-pointer z-50">
      <Image
        src="/recipe-detail/backArrow.svg"
        alt="Back arrow"
        width={20}
        height={20}
        onClick={() => router.push("/home")}
      />
    </div>
  );
}
