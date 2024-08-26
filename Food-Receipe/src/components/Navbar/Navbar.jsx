import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { setSearchParams, searchParams, handlesubmit } =
    useContext(GlobalContext);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          <NavLink to={"/"}>Food Recipe</NavLink>
        </h2>
        <form
          onSubmit={handlesubmit}
          className="flex items-center bg-gray-100 rounded-lg overflow-hidden shadow-inner"
        >
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            className="bg-transparent py-2 px-4 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500 focus:outline-none"
          >
            Search
          </button>
        </form>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className="hover:text-blue-600 transition duration-300"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
