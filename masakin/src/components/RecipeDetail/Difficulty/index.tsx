import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface DifficultyProps {
  recipeDetailData: recipeInfo;
}

export default function Difficulty({ recipeDetailData }: DifficultyProps) {
  return (
    <div className="flex gap-1">
      {[...Array(recipeDetailData.dificultly_level)].map((_, index) => (
        <Image
          key={index}
          src="/recipe-detail/chefHat.svg"
          alt="Difficulty"
          width={19}
          height={18}
        />
      ))}
    </div>
  );
}
