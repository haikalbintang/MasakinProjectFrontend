import SmallCard from "@/components/RecipeCard/smallCard";
import { recipeDetailData } from "@/data/Detail";
import { recipeDetailType } from "@/data/Type";

const NewRecipe = () => {
  return (
    <div className="w-full mb-[52px] pl-[32px]">
      <h2 className="text-[16px] font-[600] text-black mb-[15px]">
        Resep Baru
      </h2>
      <div className="flex w-auto flex-row space-x-[7px] overflow-x-auto">
        {recipeDetailData.map((recipe: recipeDetailType) => (
          <SmallCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipe;
