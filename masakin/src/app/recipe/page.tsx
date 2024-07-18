import { recipeDetailData } from "@/data/Detail";
import Title from "@/components/RecipeDetail/Title";
import FoodImage from "@/components/RecipeDetail/FoodImage";
import Rating from "@/components/RecipeDetail/Rating";
import CookingTime from "@/components/RecipeDetail/CookingTime";
import Difficulty from "@/components/RecipeDetail/Difficulty";
import Bookmark from "@/components/RecipeDetail/Bookmark";
import Descriptions from "@/components/RecipeDetail/Descriptions";
import PinkButton from "@/components/RecipeDetail/PinkButton";
import GreenButtonsMenus from "@/components/RecipeDetail/GreenButtonsMenus";

export default function RecipeDetail() {
  return (
    <main className="px-9 flex flex-col justify-center items-center">
      <Title recipeDetailData={recipeDetailData[0]} />
      <FoodImage recipeDetailData={recipeDetailData[0]} />
      <div className="flex justify-between items-center w-full py-3">
        <Rating recipeDetailData={recipeDetailData[0]} />
        <CookingTime recipeDetailData={recipeDetailData[0]} />
        <Difficulty recipeDetailData={recipeDetailData[0]} />
        <Bookmark />
      </div>
      <Descriptions recipeDetailData={recipeDetailData[0]} />
      <PinkButton />
      <GreenButtonsMenus recipeDetailData={recipeDetailData[0]} />
    </main>
  );
}
