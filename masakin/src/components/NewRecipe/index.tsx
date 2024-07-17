"use client";

import SmallCard from "@/components/RecipeCard/smallCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import { fetchRecipeList } from "@/data/api/authApi";
import React, { useEffect, useState } from "react";

const NewRecipe: React.FC = () => {
  const [recipeList, setRecipeList] = useState<recipeDetailType[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipes = await fetchRecipeList();
        recipes.sort((a, b) => a.id - b.id);
        setRecipeList(recipes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className="w-full mb-[52px] pl-[32px]">
      <h2 className="text-[16px] font-[600] text-black mb-[15px]">
        Resep Baru
      </h2>
      <div className="flex w-auto flex-row space-x-[7px] overflow-x-auto no-scrollbar">
        {recipeList.map((recipe: recipeDetailType) => (
          <SmallCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;
