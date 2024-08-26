import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Details() {
  const { receipeDetails, setReceipeDetails, favourite, handleFavourites } =
    useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();

      if (data?.data) {
        setReceipeDetails(data?.data);
      }
      console.log(data);
    }

    fetchdata();
  }, [id, setReceipeDetails]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 bg-gray-200">
          <img
            src={receipeDetails?.recipe?.image_url}
            alt={receipeDetails?.recipe?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {receipeDetails?.recipe?.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            By {receipeDetails?.recipe?.publisher}
          </p>
          <button
            onClick={() => handleFavourites(receipeDetails?.recipe)}
            className={`px-4 py-2 rounded-lg text-white ${
              favourite &&
              favourite.length > 0 &&
              favourite.findIndex(
                (item) => item.id === receipeDetails?.recipe?.id
              ) !== -1
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}
          >
            {favourite &&
            favourite.length > 0 &&
            favourite.findIndex(
              (item) => item.id === receipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from Favourite"
              : "Add to Favourite"}
          </button>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {receipeDetails?.recipe?.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{ingredient.quantity}</span>:{" "}
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
