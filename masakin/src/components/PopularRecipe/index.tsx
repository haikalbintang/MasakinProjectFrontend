"use client"

import BigCard from "@/components/RecipeCard/bigCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import { fetchRecipeList } from "@/data/api/authApi";
import React, { useEffect, useState } from "react";

const PopularRecipe = () => {
  const [result, setResult] = useState<recipeDetailType[]>([])
  useEffect(() => {
    async function fetchData() {
      const recipes = await fetchRecipeList();
      setResult(recipes);
    }
    fetchData();
  }, [])

  return (
    <div className="w-full pl-[32px] pb-[81px]">
      <h2 className="text-[16px] font-[600] text-black mb-[8px]">
        Resep Populer
      </h2>
      <div className="flex flex-wrap">
        {result.map((recipe: recipeDetailType) => (
          <BigCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipe;
