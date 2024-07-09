import SmallCard from "@/components/RecipeCard/smallCard"

const NewRecipe = () => {
  return (
    <div className="mb-10 space-y-3.5">
      <h2 className="text-base font-semibold text-black">Resep Baru</h2>
      <div className="flex flex-row space-x-1.5 overflow-x-scroll">
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
      </div>
    </div>
  );
}

export default NewRecipe;