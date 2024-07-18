"use client"
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  }

  return (
    <div className="flex flex-row mb-[32px]">
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
          onChange={handleSearchChange}
          className="w-full h-[35px] pl-[10px] rounded-[10px] text-[11px] font-[400] placeholder:text-neutral-300 focus:outline-none " />
      </div>
      <Link href={`/search?query=${search}`}>
        <button onClick={handleSearch} className="searchButton w-[65px] h-[40px] px-4 rounded-[10px] bg-red text-[15px] font-[400] text-white">Cari</button>
      </Link>
    </div>
  );
}

export default SearchBar;