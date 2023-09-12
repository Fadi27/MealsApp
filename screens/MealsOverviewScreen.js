import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScrenn({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={styles.Container}>
      <Text>Meal - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScrenn;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
});
