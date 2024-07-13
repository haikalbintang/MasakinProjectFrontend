import { recipeDetailType } from "@/data/Type";

interface TitleProps {
  recipeDetailData: recipeDetailType;
}

export default function Title({ recipeDetailData }: TitleProps) {
  return <h1 className="text-xl text-center py-3">{recipeDetailData.title}</h1>;
}
