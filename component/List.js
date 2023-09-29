import { View, Text, StyleSheet } from "react-native";
function List({ item }) {
  return (
    <View style={styles.ListContainer}>
      {item.map((ing) => (
        <Text style={styles.List} key={ing}>
          {ing}
        </Text>
      ))}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  List: {
    padding: 6, // Padding for each item
    margin: 5, // Margin between items
    backgroundColor: "#e1b382", // Background color for each item
    borderRadius: 5, // Optional: Rounded corners for each item},
    width: "70%",
    textAlign: "center",
    fontSize: 15,
  },
  ListContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", // Arrange items horizontally
    padding: 10, // Padding around the container
    borderRadius: 5, // Optional: Rounded corners for the container},
  },
});
