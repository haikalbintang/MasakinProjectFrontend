import { recipeInfo } from "@/data/Type";

interface TitleProps {
  recipeDetailData: recipeInfo;
}

export default function Title({ recipeDetailData }: TitleProps) {
  return (
    <h1 className="text-xl text-center py-3">{recipeDetailData.food_name}</h1>
  );
}
