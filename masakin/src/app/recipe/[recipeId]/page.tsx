import RecipeDetail from "@/components/RecipeDetail";
import BackArrow from "@/components/RecipeDetail/BackArrow";

interface RecipeDetailPageProps {
  params: { recipeId: string };
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const response = await fetch(
    `https://masakinprojectbe.vercel.app/recipe/${params.recipeId}`
  );
  const recipe = await response.json();

  return (
    <main className="relative">
      <BackArrow />
      <RecipeDetail recipeDetailData={recipe} />
    </main>
  );
}
