import { recipeDetailTypeOld } from "@/data/Type";

interface DescriptionsProps {
  recipeDetailData: recipeDetailTypeOld;
}

export default function Descriptions({ recipeDetailData }: DescriptionsProps) {
  return (
    <div className="text-sm font-medium flex flex-col pt-2 pb-6 gap-3">
      {recipeDetailData.description.map((desc, index) => (
        <p key={index} className="text-justify leading-tight">
          {desc}
        </p>
      ))}
    </div>
  );
}
