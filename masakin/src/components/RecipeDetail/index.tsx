import Title from "@/components/RecipeDetail/Title";
import FoodImage from "@/components/RecipeDetail/FoodImage";
import Rating from "@/components/RecipeDetail/Rating";
import CookingTime from "@/components/RecipeDetail/CookingTime";
import Difficulty from "@/components/RecipeDetail/Difficulty";
import Bookmark from "@/components/RecipeDetail/Bookmark";
import Descriptions from "@/components/RecipeDetail/Descriptions";
import PinkButton from "@/components/RecipeDetail/PinkButton";
import GreenButtonsMenus from "@/components/RecipeDetail/GreenButtonsMenus";
import { recipeDetailType } from "@/data/Type";

interface RecipeDetailProps {
  recipeDetailData: recipeDetailType;
}

export default function RecipeDetail({ recipeDetailData }: RecipeDetailProps) {
  return (
    <div className="px-9 flex flex-col justify-center items-center">
      <Title recipeDetailData={recipeDetailData} />
      <FoodImage recipeDetailData={recipeDetailData} />
      <div className="flex justify-between items-center w-full py-3">
        <Rating recipeDetailData={recipeDetailData} />
        <CookingTime recipeDetailData={recipeDetailData} />
        <Difficulty recipeDetailData={recipeDetailData} />
        <Bookmark />
      </div>
      <Descriptions recipeDetailData={recipeDetailData} />
      <PinkButton />
      <GreenButtonsMenus recipeDetailData={recipeDetailData} />
    </div>
  );
}
