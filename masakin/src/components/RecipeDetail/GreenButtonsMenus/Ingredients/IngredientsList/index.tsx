import { recipeDetailTypeOld } from "@/data/Type";

interface IngredientsListProps {
  recipeDetailData: recipeDetailTypeOld;
}

export default function IngredientsList({
  recipeDetailData,
}: IngredientsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.ingredients.map((ingredient, index) => (
        <li
          key={index}
          className="my-1 flex w-full justify-between items-center text-sm bg-[#ECEAFE] rounded-lg font-semibold py-2 px-3"
        >
          <p>{ingredient.number}</p>
          <p>{ingredient.name}</p>
        </li>
      ))}
    </ul>
  );
}
