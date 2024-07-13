import { recipeDetailType } from "@/data/Type";

interface TotalProps {
    text: string,
    recipeDetailData: recipeDetailType,
}

export default function Total({ text, recipeDetailData }: TotalProps) {
  return (
    <p className="w-1/3 text-right text-xs text-[#A9A9A9]">
      {recipeDetailData.ingredients.length} {text}
    </p>
  );
}
