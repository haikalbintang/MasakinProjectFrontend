import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import Navbar from "@/components/Navbar";

export default function homePage() {
  return (
    <>
      <main className="flex flex-col pt-[65px] items-center">
        <SearchBar></SearchBar>
        <SearchResult></SearchResult>
        <Navbar></Navbar>
      </main>
    </>
  );
}
