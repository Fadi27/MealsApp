import { View, Text, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/Subtitle";
import List from "../component/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../component/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
  const Route = route.params;
  const mealId = Route.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const FavoritesCtxt = useContext(FavoritesContext);
  const isFavMeal = FavoritesCtxt.ids.includes(mealId);

  function ChangeStateMealHandler() {
    if (isFavMeal) {
      FavoritesCtxt.removeFavorite(mealId);
    } else {
      FavoritesCtxt.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavMeal ? "heart" : "heart-outline"}
            color="white"
            onPress={ChangeStateMealHandler}
          />
        );
      },
    });
  }, [navigation, ChangeStateMealHandler]);

  return (
    <ScrollView style={styles.marginBottom}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailsText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Subtitle title="Ingredients" />
      <List item={selectedMeal.ingredients} />
      <Subtitle title="Steps" />
      <List item={selectedMeal.steps} />
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  detailsText: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: "white",
  },
});
