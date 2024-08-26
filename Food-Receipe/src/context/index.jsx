import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParamas, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipeList, setReceipeList] = useState([]);
  const [receipeDetails, setReceipeDetails] = useState(null);
  const [favourite, setFavourite] = useState([]);

  const navigate = useNavigate();

  async function handlesubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParamas}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setReceipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setSearchParams("");
      console.error(error);
    }
  }

  function handleFavourites(currentIdx) {
    const favs = [...favourite];
    const index = favs.findIndex((item) => item.id === currentIdx);
    if (index === -1) {
      favs.push(currentIdx);
    } else {
      favs.splice(index, 1);
    }

    setFavourite(favs);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParamas,
        setSearchParams,
        receipeList,
        setReceipeList,
        receipeDetails,
        setReceipeDetails,
        loading,
        handlesubmit,
        favourite,
        handleFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
