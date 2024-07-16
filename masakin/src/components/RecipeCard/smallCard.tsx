"use client";

import { recipeDetailType } from "@/data/Type";
import Image from "next/image";

interface RecipeDetailProps {
  recipe: recipeDetailType;
}

const SmallCard: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <div onClick={() => window.location.href = `/recipe/${recipe.id}`} className="min-w-[106px] h-[141px] pt-[8px] rounded-[10px] bg-grey-100 flex flex-col items-center">
      <Image
        width={100}
        height={100}
        style={{
          width: "92px",
          height: "56px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "7px"
        }}
        src={recipe.food_image}
        alt={recipe.food_name}
      />
      <p className="text-[11px] font-[400] text-grey-600 text-center leading-[13.31px]">
        {recipe.food_name}
      </p>
      <div className="relative w-full h-full mb-[5px]">
        <div className="absolute w-full inset-x-0 bottom-0 px-[5px] space-y-[10px]">
          <div className="flex flex-row justify-center">
            {[...Array(recipe.rating)].map((_, index) => (
              <Image
                key={index}
                src="/starGreen.svg"
                alt="Star rating"
                width={10}
                height={10}
                style={{
                  width: "8px",
                  height: "8px",
                }}
              />
            ))}
          </div>
          <div className="flex flex-row space w-full justify-between">
            <div className="flex flex-row space-x-0.5 items-center">
              <Image
                src="/timeGreen.svg"
                alt="Time:"
                width={10}
                height={10}
                style={{
                  width: "8px",
                  height: "8px",
                }}
              />
              <p className="text-green-400 text-[8px]">{recipe.cooking_time} menit</p>
            </div>
            <Image
              src="/bookmark.svg"
              alt="Bookmark"
              width={10}
              height={10}
              style={{
                width: "13px",
                height: "13px",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmallCard;
