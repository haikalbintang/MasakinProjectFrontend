import Title from "@/components/RecipeDetail/Title";
import FoodImage from "@/components/RecipeDetail/FoodImage";
import Rating from "@/components/RecipeDetail/Rating";
import CookingTime from "@/components/RecipeDetail/CookingTime";
import Difficulty from "@/components/RecipeDetail/Difficulty";
import Bookmark from "@/components/RecipeDetail/Bookmark";
import Descriptions from "@/components/RecipeDetail/Descriptions";
import PinkButton from "@/components/RecipeDetail/PinkButton";
import GreenButtonsMenus from "@/components/RecipeDetail/GreenButtonsMenus";
import { recipeInfo } from "@/data/Type";

interface RecipeDetailProps {
  recipeDetailData: recipeInfo;
}

export default function RecipeDetail({ recipeDetailData }: RecipeDetailProps) {
  return (
    <div className="relative px-[35px] pt-[41px] flex flex-col justify-center items-center">
      <div className="w-full sticky top-0 z-40 bg-white">
        <Title recipeDetailData={recipeDetailData} />
        <FoodImage recipeDetailData={recipeDetailData} />
        <div className="flex justify-between items-center w-full py-3">
          <Rating recipeDetailData={recipeDetailData} />
          <CookingTime recipeDetailData={recipeDetailData} />
          <Difficulty recipeDetailData={recipeDetailData} />
          <Bookmark />
        </div>
      </div>
      <Descriptions recipeDetailData={recipeDetailData} />
      <PinkButton />
      <GreenButtonsMenus recipeDetailData={recipeDetailData} />
      <div className="h-96"></div>
    </div>
  );
}
