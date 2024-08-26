import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Favourites = () => {
  const { favourite } = useContext(GlobalContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Favourites</h1>
      {favourite && favourite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favourite.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl text-gray-600">
            Nothing to show. Please add some favourites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
