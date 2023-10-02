import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "./screens/FavoritesScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavi() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#e1b382" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#12343b" },
        tabBarActiveTintColor: "#e1b382",
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TabNavi"
            screenOptions={{
              headerStyle: { backgroundColor: "#e1b382" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#12343b" },
            }}
          >
            <Stack.Screen
              name="TabNavi"
              component={TabNavi}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              //Das ist der Code für den Title in einem Screen zu zeigen
              // 1. Lösung, die zweite in der MealsOverviewScreen
              options={({ route, navigation }) => {
                const catId = route.params.categoryId;
                const catTitle = CATEGORIES.find(
                  (cat) => cat.id === catId
                ).title;
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
      </FavoritesContextProvider>
    </>
  );
}
