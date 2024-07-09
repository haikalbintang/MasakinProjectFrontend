"use client"

import { recipeDetailData } from "@/data/Detail";
import Image from "next/image";

// interface recipeProps {
//   recipeDetailData: recipeDetail;
// }

const BigCard = () => {
  return (
    <div className="relative w-40 h-40 mb-1.5 rounded-xl overflow-hidden bg-neutral-500 bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${recipeDetailData.image})`
      }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-0"></div>
      <div className="relative mx-4 space-y-1 top-24">
        <p className="text-sm font-semibold text-white">{recipeDetailData.title}</p>
        <div className="flex flex-row">
          {[...Array(recipeDetailData.rating)].map((_, index) => (
            <Image
              key={index}
              src="/starGold.svg"
              alt="Star rating"
              width={12}
              height={12}
            />
          ))}
        </div>
        <div className="flex flex-row text-xs w-full justify-between text-neutral-400 items-center">
          <div className="flex flex-row space-x-1 items-center">
            <Image
              src="/timeGray.svg"
              alt="Time:"
              width={15}
              height={15}
            />
            <p>{recipeDetailData.time} menit</p>
          </div>
          <Image
            src="/bookmark.svg"
            alt="Bookmark"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  )
}

export default BigCard