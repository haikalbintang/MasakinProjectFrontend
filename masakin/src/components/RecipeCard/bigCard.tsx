"use client";

import { recipeDetailType } from "@/data/Type";
import Image from "next/image";

interface RecipeDetailProps {
  recipe: recipeDetailType;
}

const BigCard: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <div
      className="relative w-[170px] h-[167px] mb-1.5 mr-[9px] mr7 rounded-[10px] overflow-hidden bg-neutral-500 bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${recipe.image})`,
      }}
    >
      <div className="absolute w-full h-[128px] top-[39px] bg-gradient-to-b from-black/0 to-black/100 z-0"></div>
      <div className="relative mx-[16px] h-full mb-[8px]">
        <div className="absolute w-full inset-x-0 bottom-0">
          <p className="text-[14px] font-[600] text-white leading-[13.31px] mb-[5px]">{recipe.title}</p>
          <div className="flex flex-row mb-[5px]">
            {[...Array(recipe.rating)].map((_, index) => (
              <Image
                key={index}
                src="/starGold.svg"
                alt="Star rating"
                width={10}
                height={10}
                style={{
                  width: "12px",
                  height: "11.16px",
                }}
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row space-x-[5px] items-center">
              <Image
                src="/timeGray.svg"
                alt="Time:"
                width={10}
                height={10}
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              <p className="text-neutral-400 text-[11px] font-[400]">
                {recipe.time} menit
              </p>
            </div>
            <Image
              src="/bookmark.svg"
              alt="Bookmark"
              width={10}
              height={10}
              style={{
                width: "17px",
                height: "17px",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BigCard;
