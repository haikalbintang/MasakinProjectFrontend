import RecipeDetail from "@/components/RecipeDetail";
import BackArrow from "@/components/RecipeDetail/BackArrow";
import { recipeDetailData } from "@/data/Detail";

interface RecipeDetailPageProps {
  params: { recipeId: string };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {

  return (
    <main>
      <BackArrow />
      <RecipeDetail
        recipeDetailData={recipeDetailData[Number(params.recipeId)]}
      />
      <p className="text-blue-700">{params.recipeId}</p>
      <p>ini paragraf</p>
    </main>
  );
}
