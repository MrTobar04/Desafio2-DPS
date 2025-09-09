import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    card: "#1E1E1E",
    text: "#fff",
    primary: "#BB86FC",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Platillos Típicos" }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detalles del Platillo" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
