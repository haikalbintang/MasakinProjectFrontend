import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface RatingProps {
  recipeDetailData: recipeInfo;
}

export default function Rating({ recipeDetailData }: RatingProps) {
  return (
    <div className="flex">
      {[...Array(Math.ceil(Number(recipeDetailData.rating)))].map(
        (_, index) => (
          <Image
            key={index}
            src="/recipe-detail/starGold.svg"
            alt="Star rating"
            width={15}
            height={14}
          />
        )
      )}
    </div>
  );
}
