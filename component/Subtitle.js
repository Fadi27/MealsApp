import { View, Text, StyleSheet } from "react-native";
function Subtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    marginTop: 2,
    marginBottom: 12,
    color: "white",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginHorizontal: 50,
  },
});
