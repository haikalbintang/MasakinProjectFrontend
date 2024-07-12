import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";
import Search from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

export default function homePage() {
  return (
    <>
      <main className="flex flex-col pt-[65px] items-center">
        <Navbar></Navbar>
        <Search></Search>
        <NewRecipe></NewRecipe>
        <PopularRecipe></PopularRecipe>
      </main>
    </>
  );
}
