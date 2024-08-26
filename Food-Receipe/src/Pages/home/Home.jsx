import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Home = () => {
  const { receipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {receipeList && receipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {receipeList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl text-gray-600">
            Nothing to show. Please search for a recipe.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
