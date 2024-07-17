"use client"

import SmallCard from "@/components/RecipeCard/smallCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import { fetchRecipeList } from "@/data/api/authApi";
import React, { useEffect, useState } from "react";



const NewRecipe: React.FC = () => {
  const [result, setResult] = useState<recipeDetailType[]>([])
  useEffect(() => {
    async function fetchData() {
      const recipes = await fetchRecipeList();
      setResult(recipes);
    }
    fetchData();
  }, [])

  return (
    <div className="w-full mb-[52px] pl-[32px]">
      <h2 className="text-[16px] font-[600] text-black mb-[15px]">
        Resep Baru
      </h2>
      <div className="flex w-auto flex-row space-x-[7px] overflow-x-auto no-scrollbar">
        {result.map((recipe: recipeDetailType) => (
          <SmallCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;