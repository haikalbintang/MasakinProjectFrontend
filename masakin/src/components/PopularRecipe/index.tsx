import BigCard from "@/components/RecipeCard/bigCard";
import { recipeDetailData } from "@/data/Mock";
import { recipeDetailType } from "@/data/Type";

const PopularRecipe = () => {
  return (
    <div className="pl-[32px] pb-[81px]">
      <h2 className="text-[16px] font-[600] text-black mb-[8px]">
        Resep Populer
      </h2>
      <div className="flex flex-wrap">
        {recipeDetailData.map((recipe: recipeDetailType) => (
          <BigCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipe;
