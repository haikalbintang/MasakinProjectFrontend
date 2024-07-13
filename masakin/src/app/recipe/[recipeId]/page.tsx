import RecipeDetail from "@/components/RecipeDetail";
import BackArrow from "@/components/RecipeDetail/BackArrow";
import { recipeDetailData } from "@/data/Detail";

interface RecipeDetailPageProps {
  params: { recipeId: string };
}

// async function getRecipeById(recipeId: string) {
//   const response = await fetch(
//     `https://masakinprojectbe.vercel.app/recipe/${recipeId}`,
//     {
//       method: "GET",
//     }
//   );

//   return response.json();
// }

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  // const response = getRecipeById(params.recipeId);
  // console.log(response);

  return (
    <>
      <BackArrow />
      <RecipeDetail
        recipeDetailData={recipeDetailData[Number(params.recipeId)]}
      />
      <p className="text-blue-700">{params.recipeId}</p>
      <p>ini paragraf</p>
    </>
  );
}
