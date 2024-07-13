import { recipeDetailType } from "@/data/Type";
import Image from "next/image";

interface FoodImageProps {
  recipeDetailData: recipeDetailType;
}

export default function FoodImage({ recipeDetailData }: FoodImageProps) {
  return (
    <div className="w-full h-36 relative rounded-xl">
      <Image
        className="rounded-xl"
        src={recipeDetailData.image}
        alt={recipeDetailData.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
