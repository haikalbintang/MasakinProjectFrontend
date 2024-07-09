"use client"

import { recipeDetailData } from "@/data/Detail";
import Image from "next/image";

// interface recipeProps {
//   recipeDetailData: recipeDetail;
// }

const SmallCard = () => {
  return (
    <div className="min-w-28 h-36 pt-2 rounded-xl bg-grey-100 flex flex-col items-center space-y-1.5">
      <Image
        width={100}
        height={100}
        style={{
          width: '6rem',
          height: '3.5rem',
          objectFit: 'cover',
          borderRadius: '10px'
        }}
        src={recipeDetailData.image}
        alt={recipeDetailData.title}
      />
      <p className="text-xs font-medium text-grey-600">{recipeDetailData.title}</p>
      <div className="relative w-24 space-y-3 top-3">
        <div className="flex flex-row justify-center">
          {[...Array(recipeDetailData.rating)].map((_, index) => (
            <Image
              key={index}
              src="/starGreen.svg"
              alt="Star rating"
              width={8}
              height={8}
            />
          ))}
        </div>
        <div className="flex flex-row space text-[0.5rem] w-full justify-between">
          <div className="flex flex-row space-x-0.5 items-center">
            <Image
              src="/timeGreen.svg"
              alt="Time:"
              width={9}
              height={9}
              color="rgba(9, 118, 89, 1)"
            />
            <p className="text-green-400">{recipeDetailData.time} menit</p>
          </div>
          <Image
            src="/bookmark.svg"
            alt="Bookmark"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  )
}

export default SmallCard