import { recipeDetailType } from "@/data/Type";

interface TotalProps {
  text: string;
  recipeDetailData: recipeDetailType;
  menu: "ingredients" | "tools" | "instructions";
}

export default function Total({ text, recipeDetailData, menu }: TotalProps) {
  return (
    <p className="w-1/3 text-right text-xs text-[#A9A9A9]">
      {recipeDetailData[menu].length} {text}
    </p>
  );
}
