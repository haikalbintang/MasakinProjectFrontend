import { recipeInfo } from "@/data/Type";
import Servings from "../../components/Servings";
import TextBlack from "../../components/TextBlack";
import Total from "../../components/Total";
import ToolsList from "./ToolsList";

interface ToolsProps {
  recipeDetailData: recipeInfo;
}

export default function Tools({ recipeDetailData }: ToolsProps) {
  return (
    <>
      <div className="flex w-full justify-between items-center mt-6 mb-4">
        <Servings recipeDetailData={recipeDetailData} />
        <TextBlack text={"Alat-alat"} />
        <Total
          menu={"utensil_info"}
          text={"Alat"}
          recipeDetailData={recipeDetailData}
        />
      </div>
      <ToolsList recipeDetailData={recipeDetailData} />
    </>
  );
}
