import { recipeDetailTypeOld } from "@/data/Type";
import Servings from "../../components/Servings";
import TextBlack from "../../components/TextBlack";
import Total from "../../components/Total";
import InstructionsList from "./InstructionsList";

interface InstructionsProps {
  recipeDetailData: recipeDetailTypeOld;
}

export default function Instructions({ recipeDetailData }: InstructionsProps) {
  return (
    <>
      <div className="flex w-full justify-between items-center mt-6 mb-4">
        <Servings recipeDetailData={recipeDetailData} />
        <TextBlack text={"Cara Memasak"} />
        <Total
          menu={"instructions"}
          text={"Langkah"}
          recipeDetailData={recipeDetailData}
        />
      </div>
      <InstructionsList recipeDetailData={recipeDetailData} />
    </>
  );
}
