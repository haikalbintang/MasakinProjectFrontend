const Home = () => {
  const search = async () => {
  }

  return (
    <div className="searchBar space-x-1.5 flex flex-row">
      {/* <div className="w-64 h-10 flex flex-row">
        <Image src="/search.svg" width={18} height={18} alt="" />
        <input type="text" id="searchInput" placeholder="Search recipe" className="searchInput w-20 h-4" />
      </div> */}
      <input type="text" id="searchInput" placeholder="Search recipe" className="searchInput w-64 h-10 p-4 rounded-lg border-2 border-neutral-300 text-xs font-normal placeholder:text-neutral-300" />
      <button className="searchButton w-fit h-10 px-4 rounded-lg bg-red text-base font-medium text-white">Cari</button>
    </div>
  );
}

export default Home;