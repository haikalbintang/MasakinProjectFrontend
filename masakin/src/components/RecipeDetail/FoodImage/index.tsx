import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface FoodImageProps {
  recipeDetailData: recipeInfo;
}

export default function FoodImage({ recipeDetailData }: FoodImageProps) {
  return (
    <div className="w-full h-36 relative rounded-xl">
      <Image
        className="rounded-xl"
        src={recipeDetailData.food_image}
        alt={recipeDetailData.food_name}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
