import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";

export default function homePage() {
  return (
    <>
      <main className="flex flex-col pl-[32px] pt-[65px]">
        <NewRecipe></NewRecipe>
        <PopularRecipe></PopularRecipe>
      </main>
    </>
  );
}