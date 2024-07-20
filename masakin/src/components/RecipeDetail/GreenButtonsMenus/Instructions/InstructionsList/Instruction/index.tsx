import { recipeInfo } from "@/data/Type";
import Image from "next/image";

interface InstructionProps {
  instruction: string;
  index?: number;
  recipeDetailData?: recipeInfo;
}

export default function Instruction({
  instruction,
  index,
  recipeDetailData,
}: InstructionProps) {
  return (
    <div>
      <p className="w-full text-justify">{instruction}</p>
      {/* {instruction.image === "" ? null : (
        <div className="relative w-full h-[90px] my-[7px] rounded-xl object-left">
          <Image
            src={instruction.image}
            alt={`${recipeDetailData.food_name} step ${index + 1}`}
            layout="fill"
            objectFit="contain"
            className="object-left rounded-xl"
          />
        </div>
      )} */}
    </div>
  );
}
