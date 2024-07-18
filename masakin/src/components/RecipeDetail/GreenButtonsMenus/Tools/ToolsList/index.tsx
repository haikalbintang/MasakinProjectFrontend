import { recipeDetailTypeOld } from "@/data/Type";

interface ToolsListProps {
    recipeDetailData: recipeDetailTypeOld
}

export default function ToolsList({ recipeDetailData }: ToolsListProps) {
  return (
    <ul className="flex flex-col w-full">
      {recipeDetailData.tools.map((tool, index) => (
        <li
          key={index}
          className="my-1 flex w-full justify-between items-center text-sm bg-[#ECEAFE] rounded-lg font-semibold py-2 px-3"
        >
          <p className="w-full">{tool}</p>
        </li>
      ))}
    </ul>
  );
}
