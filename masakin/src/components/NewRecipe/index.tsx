"use client";

import SmallCard from "@/components/RecipeCard/smallCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import { fetchRecipeByUpdate } from "@/data/api";
import React, { useEffect, useState } from "react";

interface NewRecipeProps {
  filter: string;
}

const NewRecipe: React.FC<NewRecipeProps> = ({ filter }) => {
  const [recipes, setRecipes] = useState<recipeDetailType[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<recipeDetailType[]>(
    []
  );

  async function fetchData() {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const data = await fetchRecipeByUpdate(token);
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
    <div className="w-full mb-[52px] pl-[32px]">
      <h2 className="text-[16px] font-[600] text-black mb-[15px]">
        Resep Baru
      </h2>
      <div className="flex w-auto flex-row space-x-[7px] overflow-x-auto no-scrollbar">
        {filteredRecipes.map((recipe: recipeDetailType) => (
          <SmallCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;
