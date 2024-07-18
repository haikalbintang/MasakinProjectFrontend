"use client"
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { fetchRecipeList } from "@/data/api";
import { recipeDetailType } from "@/data/Type";
import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";
import Search from "@/components/SearchBar";
import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import FilterCountry from "@/components/FilterCountry";

export default function homePage() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<recipeDetailType[]>([]);
  const searchParams = useSearchParams();
  const querystring = searchParams.get('query') || '';

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRecipeList();
        const filtered = data.filter((recipe: recipeDetailType) =>
          recipe.food_name.toLowerCase().includes(querystring.toLowerCase())
        );
        console.log(filtered)
        setFilteredData(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [querystring]);

  return (
    <>
      <main className="flex flex-col pt-[65px] items-center">
        <IntroCard></IntroCard>
        <Search search={search} setSearch={setSearch} ></Search>
        <FilterCountry></FilterCountry>
        <NewRecipe></NewRecipe>
        <PopularRecipe></PopularRecipe>
      </main >
      <Navbar></Navbar>
    </>
  );
}
