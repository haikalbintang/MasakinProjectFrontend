"use client"
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";
import BigCard from "@/components/RecipeCard/bigCard";

interface SearchResultProps {
  filteredData: recipeDetailType[];
}

const SearchResult: React.FC<SearchResultProps> = ({ filteredData }) => {

  return (
    <div className="pl-[32px] flex flex-wrap self-start">
      {filteredData.map((recipe: recipeDetailType) => (
        <BigCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default SearchResult