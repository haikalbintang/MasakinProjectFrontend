import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface ServingsProps {
  recipeDetailData: recipeInfo;
}

export default function Servings({ recipeDetailData }: ServingsProps) {
  return (
    <div className="w-1/3 flex gap-1">
      <div className="flex gap-1">
        <Image
          src="/recipe-detail/serving.svg"
          alt="Servings"
          width={17}
          height={18}
        />
        <p className="text-[#A9A9A9] text-sm">
          {recipeDetailData.serving}3 Porsi
        </p>
      </div>
    </div>
  );
}
