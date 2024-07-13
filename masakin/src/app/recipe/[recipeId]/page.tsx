import { recipeDetailData } from "@/data/Detail";

interface RecipeDetailPageProps {
  params: { recipeId: string };
}

async function getRecipeById(recipeId: string) {
  const response = await fetch(
    `https://masakinprojectbe.vercel.app/recipe/${recipeId}`,
    {
      method: "GET",
    }
  );

  return response.json();
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const response = getRecipeById(params.recipeId);
  console.log(response);

  return (
    <>
      <h1>TEST</h1>
      {/* <p className="text-red-700">{recipeId}</p> */}
      <p className="text-blue-700">{params.recipeId}</p>
      <p>ini paragraf</p>
    </>
  );
}
