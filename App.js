import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#e1b382" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#12343b" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //Das ist der Code für den Title in einem Screen zu zeigen
            // 1. Lösung, die zweite in der MealsOverviewScreen
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;
              return {
                title: catTitle,
              };
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me!" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
