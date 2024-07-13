import { recipeDetailType } from "@/data/Type";

interface InstructionsListProps {
  recipeDetailData: recipeDetailType;
}

export default function InstructionsList({
  recipeDetailData,
}: InstructionsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.instructions.map((instruction, index) => (
        <li
          key={index}
          className="items-start gap-1 my-1 flex w-full justify-between text-sm bg-[#ECEAFE] rounded-lg font-medium py-2 px-3"
        >
          <p className="items-start">{index + 1}. </p>
          <p className="w-full text-justify">{instruction.text}</p>
        </li>
      ))}
    </ul>
  );
}
