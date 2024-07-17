"use client"
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import BigCard from "@/components/RecipeCard/bigCard";

const SearchResult = () => {
  let querystring = window.location.search.substring(7);

  const searchResult = recipeDetailData.filter((recipe: recipeDetailType) =>
    recipe.food_name.toLowerCase().includes(querystring.toLowerCase())
  )

  return (
    <div className="pl-[32px] flex flex-wrap self-start">
      {searchResult.map((recipe: recipeDetailType) => (
        <BigCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default SearchResult