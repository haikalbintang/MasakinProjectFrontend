"use client";
import { useState, useEffect } from "react";
import { fetchRecipeByUpdate } from "@/data/api";
import { recipeDetailType } from "@/data/Type";
import SearchResult from "@/components/SearchResult";
import PopularRecipe from "@/components/PopularRecipe";
import NewRecipe from "@/components/NewRecipe";
import Search from "@/components/SearchBar";
import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import FilterCountry from "@/components/FilterCountry";

export default function homePage() {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<recipeDetailType[]>([]);
  const [data, setData] = useState<recipeDetailType[]>([]);
  const [shown, setShown] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterCountry, setFilterCountry] = useState<string>("");

  async function fetchData() {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const data = await fetchRecipeByUpdate(token);
        setData(data);
        setFilteredData(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(value = "") {
    setShown(Boolean(value));
    const filtered = data.filter((recipe: recipeDetailType) =>
      recipe.food_name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(search, filtered);
    setFilteredData(filtered);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="flex flex-col pt-[65px] items-center">
        <IntroCard />
        <Search
          shown={shown}
          search={search}
          setSearch={setSearch}
          fetchData={handleSearch}
          loading={loading}
        />
        {shown ? (
          <SearchResult filteredData={filteredData} />
        ) : (
          <>
            <FilterCountry setFilter={setFilterCountry} />
            <NewRecipe filter={filterCountry} />
            <PopularRecipe filter={filterCountry} />
          </>
        )}
      </main>
      <Navbar />
    </>
  );
}
