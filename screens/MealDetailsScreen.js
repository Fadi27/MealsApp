import { View, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/Subtitle";
import List from "../component/List";

function MealDetailsScreen({ route }) {
  const Route = route.params;
  const mealId = Route.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
