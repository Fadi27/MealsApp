import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  function addFavMeal(id) {
    setFavoritesMealIds((currentIds) => [...currentIds, id]);
  }

  function removeFavMeal(id) {
    setFavoritesMealIds((currentIds) =>
      currentIds.filter((mealId) => mealId != id)
    );
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavMeal,
    removeFavorite: removeFavMeal,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
