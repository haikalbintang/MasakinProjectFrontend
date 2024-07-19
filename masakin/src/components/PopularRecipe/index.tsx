"use client";

import BigCard from "@/components/RecipeCard/bigCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import { fetchRecipeByRating } from "@/data/api";
import React, { useEffect, useState } from "react";

interface PopularRecipeProps {
  filter: string;
}

const PopularRecipe: React.FC<PopularRecipeProps> = ({ filter }) => {
  const [recipes, setRecipes] = useState<recipeDetailType[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<recipeDetailType[]>(
    []
  );

  async function fetchData() {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const data = await fetchRecipeByRating(token);
        setRecipes(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = recipes.filter(
    (recipe) =>
      filter === "" ||
      recipe.country_name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    setFilteredRecipes(filtered);
  }, [filter, recipes]);

  return (
    <div className="w-full pl-[32px] pb-[81px]">
      <h2 className="text-[16px] font-[600] text-black mb-[8px]">
        Resep Populer
      </h2>
      <div className="flex flex-wrap">
        {filteredRecipes.map((recipe: recipeDetailType) => (
          <BigCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipe;
