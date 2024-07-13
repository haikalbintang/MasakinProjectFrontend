import { recipeDetailType } from "@/data/Type";
import Servings from "../../components/Servings";
import TextBlack from "../../components/TextBlack";
import Total from "../../components/Total";
import IngredientsList from "./IngredientsList";

interface IngredientsProps {
  recipeDetailData: recipeDetailType;
}

export default function Ingredients({ recipeDetailData }: IngredientsProps) {
  return (
    <>
      <div className="flex w-full justify-between items-center mt-6 mb-4">
        <Servings recipeDetailData={recipeDetailData} />
        <TextBlack text={"Masakan"} />
        <Total
          menu={"ingredients"}
          text={"Bahan"}
          recipeDetailData={recipeDetailData}
        />
      </div>
      <IngredientsList recipeDetailData={recipeDetailData} />
    </>
  );
}
