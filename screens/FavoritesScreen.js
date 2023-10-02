import { View, Text, StyleSheet } from "react-native";
import MealsList from "../component/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export default function FavoritesScreen() {
  const FavoritesCtxt = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal) =>
    FavoritesCtxt.ids.includes(meal.id)
  );
  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootConatiner}>
        <Text style={styles.text}> You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}
const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
