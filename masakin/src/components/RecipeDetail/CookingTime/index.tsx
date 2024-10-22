import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface CookingTimeProps {
  recipeDetailData: recipeInfo;
}

export default function CookingTime({ recipeDetailData }: CookingTimeProps) {
  return (
    <div className="flex gap-2">
      <Image
        src="/recipe-detail/timeGray.svg"
        alt="Time logo"
        width={23}
        height={23}
      />
      <p className="text-[#A9A9A9]">{recipeDetailData.cooking_time} menit</p>
    </div>
  );
}
