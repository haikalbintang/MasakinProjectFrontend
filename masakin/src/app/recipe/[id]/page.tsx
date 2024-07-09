// interface RecipeDetailPageProps {
//   id: string;
// }

async function getRecipeById(recipeId: string) {
  const response = await fetch(
    `https://masakinprojectbe.vercel.app/recipe/${recipeId}`,
    {
      method: "GET",
    }
  );

  return response.json();
}

export default async function RecipeDetailPage({ params }: any) {
  const { recipe } = await getRecipeById(params.id);
  console.log(recipe);
  return (
    <>
      <h1>TEST</h1>
      <p>{params.id}</p>
    </>
  );
}
