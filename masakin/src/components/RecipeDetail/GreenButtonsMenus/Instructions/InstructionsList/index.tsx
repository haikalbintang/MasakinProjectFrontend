import { recipeDetailTypeOld } from "@/data/Type";
import Image from "next/image";
import Instruction from "./Instruction";

interface InstructionsListProps {
  recipeDetailData: recipeDetailTypeOld;
}

export default function InstructionsList({
  recipeDetailData,
}: InstructionsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.instructions.map((instruction, index) => (
        <li
          key={index}
          className="items-start gap-1 my-1 flex w-full text-sm bg-[#ECEAFE] rounded-lg font-medium py-2 px-3"
        >
          <p className="items-start w-3">{index + 1}. </p>
          <Instruction
            instruction={instruction}
            index={index}
            recipeDetailData={recipeDetailData}
          />
        </li>
      ))}
    </ul>
  );
}
