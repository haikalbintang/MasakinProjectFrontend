import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";
import Search from "@/components/Search";

export default function homePage() {
  return (
    <>
      <main className="flex flex-col pt-[65px] items-center">
        <Search></Search>
        <NewRecipe></NewRecipe>
        <PopularRecipe></PopularRecipe>
      </main>
    </>
  );
}
