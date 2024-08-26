import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Details from "./Pages/Details/Details";
import Favourites from "./Pages/favourites/Favourites";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
