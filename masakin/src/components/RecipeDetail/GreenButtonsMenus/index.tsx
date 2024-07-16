"use client";

import { useState } from "react";
import { recipeDetailType } from "@/data/Type";
import GreenButtons from "./GreenButtons";
import Ingredients from "./Ingredients";
import Tools from "./Tools";
import Instructions from "./Instructions";

interface GreenButtonsMenusProps {
  recipeDetailData: recipeDetailType;
}

export default function GreenButtonsMenus({
  recipeDetailData,
}: GreenButtonsMenusProps) {
  const [selectedMenu, setSelectedMenu] = useState("Ingredients");

  return (
    <>
      <GreenButtons
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {selectedMenu === "Ingredients" ? (
        <Ingredients recipeDetailData={recipeDetailData} />
      ) : null}
      {selectedMenu === "Tools" ? (
        <Tools recipeDetailData={recipeDetailData} />
      ) : null}
      {selectedMenu === "Instructions" ? (
        <Instructions recipeDetailData={recipeDetailData} />
      ) : null}
    </>
  );
}
