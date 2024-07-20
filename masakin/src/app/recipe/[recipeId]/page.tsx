"use client";

import RecipeDetail from "@/components/RecipeDetail";
import BackArrow from "@/components/RecipeDetail/BackArrow";
import { fetchRecipeById } from "@/data/api";
import { recipeDetailType, recipeInfo } from "@/data/Type";
import { useCallback, useEffect, useState } from "react";

interface RecipeDetailPageProps {
  params: { recipeId: string };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<recipeDetailType | any>();

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const data = await fetchRecipeById(params.recipeId, token);
        setRecipe(data);
        // setFilteredData(data);
      }
    } catch (err) {
    } finally {
    }
  }, [params.recipeId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <main className="relative">
      <BackArrow />
      {recipe && !loading ? (
        <RecipeDetail recipeDetailData={recipe} />
      ) : (
        <div />
      )}
    </main>
  );
}
