"use client"
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `search?query=${search}`;
  }

  return (
    <div className="flex flex-row mb-[42px]">
      <div className="flex flex-row w-[255px] h-[40px] pl-[10px] mr-[5px] rounded-[10px] border-[1.3px] border-neutral-300 items-center">
        <Image
          src="/icon_search.svg"
          width={18}
          height={18}
          style={{
            width: "18px",
            height: "18px",
          }}
          alt="" />
        <input
          type="text"
          id="searchInput"
          placeholder="Search recipe"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[35px] pl-[10px] rounded-[10px] text-[11px] font-[400] placeholder:text-neutral-300 focus:outline-none " />
      </div>
      <button onClick={handleSearch} className="searchButton w-[65px] h-[40px] px-4 rounded-[10px] bg-red text-[15px] font-[400] text-white">Cari</button>
    </div>
  );
}

export default SearchBar;