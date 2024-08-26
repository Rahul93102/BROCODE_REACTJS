import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
        <img
          src={item?.image_url}
          alt="Recipe"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{item?.title}</h3>
        <p className="text-sm text-gray-600">By {item?.publisher}</p>
      </div>
      <Link
        to={`recipe-item/${item?.id}`}
        className="text-blue-600 hover:underline"
      >
        Recipe details
      </Link>
    </div>
  );
};

export default RecipeItem;
