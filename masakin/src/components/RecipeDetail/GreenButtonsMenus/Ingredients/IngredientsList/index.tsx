import { recipeInfo } from "@/data/Type";

interface IngredientsListProps {
  recipeDetailData: recipeInfo;
}

export default function IngredientsList({
  recipeDetailData,
}: IngredientsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.ingredient_info.map((ingredient, index) => (
        <li
          key={index}
          className="my-1 flex w-full justify-between items-center text-sm bg-[#ECEAFE] rounded-lg font-semibold py-2 px-3"
        >
          <p>{ingredient.dose}</p>
          <p>{ingredient.ingredient_name}</p>
        </li>
      ))}
    </ul>
  );
}
