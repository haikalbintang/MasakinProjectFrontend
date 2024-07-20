import { recipeInfo } from "@/data/Type";

interface TotalProps {
  text: string;
  recipeDetailData: recipeInfo;
  menu: "ingredient_info" | "utensil_info" | "instructions";
}

export default function Total({ text, recipeDetailData, menu }: TotalProps) {
  return (
    <p className="w-1/3 text-right text-xs text-[#A9A9A9]">
      {recipeDetailData[menu].length} {text}
    </p>
  );
}
