import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";

export default function homePage() {
  return (
    <>
      <main className="flex flex-col ml-8 mt-16">
        <NewRecipe></NewRecipe>
        <PopularRecipe></PopularRecipe>
      </main>
    </>
  );
}