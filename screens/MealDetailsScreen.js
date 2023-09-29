import { View, Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Details for the Page {mealId} </Text>
    </View>
  );
}
export default MealDetailsScreen;
