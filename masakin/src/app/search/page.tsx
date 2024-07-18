"use client"
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { fetchRecipeList } from "@/data/api";
import { recipeDetailType } from "@/data/Type";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import Navbar from "@/components/Navbar";

export default function searchPage() {
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
        <SearchBar search={search} setSearch={setSearch} ></SearchBar>
        <SearchResult filteredData={filteredData}></SearchResult>
      </main>
      <Navbar></Navbar>
    </>
  );
};
