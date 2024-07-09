import BigCard from "@/components/RecipeCard/bigCard"

const PopularRecipe = () => {
  return (
    <div className="mb-10 space-y-3.5">
      <h2 className="text-base font-semibold text-black">Resep Populer</h2>
      <div className="mr-8 flex justify-between flex-wrap overflow-y-scroll">
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
      </div>
    </div>
  );
}

export default PopularRecipe;