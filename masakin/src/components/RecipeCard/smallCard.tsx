"use client"

import { recipeDetailData } from "@/data/Detail";
import { recipeDetailType } from "@/data/Type";
import Image from "next/image";

interface RecipeDetailProps {
  recipe: recipeDetailType;
}

const SmallCard: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <div className="min-w-[106px] h-[141px] pt-[8px] rounded-[10px] bg-grey-100 flex flex-col items-center space-y-[7px]">
      <Image
        width={100}
        height={100}
        style={{
          width: '92px',
          height: '56px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        src={recipe.image}
        alt={recipe.title}
      />
      <p className="text-[11px] font-[400] text-grey-600 text-center">{recipe.title}</p>
      <div className="relative w-full px-[5px] space-y-[10px] top-2">
        <div className="flex flex-row justify-center">
          {[...Array(recipeDetailData[0].rating)].map((_, index) => (
            <Image
              key={index}
              src="/starGreen.svg"
              alt="Star rating"
              width={10}
              height={10}
              style={{
                width: '8px',
                height: '8px'
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
                width: '8px',
                height: '8px'
              }}
            />
            <p className="text-green-400 text-[8px]">{recipe.time} menit</p>
          </div>
          <Image
            src="/bookmark.svg"
            alt="Bookmark"
            width={10}
            height={10}
            style={{
              width: '13px',
              height: '13px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SmallCard