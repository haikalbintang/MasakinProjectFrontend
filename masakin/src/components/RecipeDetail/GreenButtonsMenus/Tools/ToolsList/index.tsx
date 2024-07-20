import { recipeInfo } from "@/data/Type";

interface ToolsListProps {
  recipeDetailData: recipeInfo;
}

export default function ToolsList({ recipeDetailData }: ToolsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.utensil_info.map((utensil, index) => (
        <li
          key={index}
          className="my-1 flex w-full justify-between items-center text-sm bg-[#ECEAFE] rounded-lg font-semibold py-2 px-3"
        >
          <p className="w-full">{utensil.utensil_name}</p>
        </li>
      ))}
    </ul>
  );
}
