"use client";

import SmallCard from "@/components/RecipeCard/smallCard";
import { recipeDetailData } from "@/data/Detail";
import { recipeDetailType } from "@/data/Type";
import { MouseEvent, useEffect, useRef, useState } from "react";

const NewRecipe = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent<HTMLDocument>) => {
        const delta = startX - e.clientX;
        if (containerRef.current !== null) {
          containerRef.current.scrollLeft = scrollLeft + delta;
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListener
      );
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener(
          "mousemove",
          handleMouseMove as unknown as EventListener
        );
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);

    if (containerRef.current !== null) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="w-full mb-[52px] pl-[32px]">
      <h2 className="text-[16px] font-[600] text-black mb-[15px]">
        Resep Baru
      </h2>
      <div
        ref={containerRef}
        className="flex w-auto flex-row space-x-[7px] overflow-x-auto no-scrollbar"
        onMouseDown={handleMouseDown}
      >
        {recipeDetailData.map((recipe: recipeDetailType) => (
          <SmallCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;
