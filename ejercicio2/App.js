import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Window size changed']);

const Stack = createNativeStackNavigator();

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    card: "#1E1E1E",
    text: "#fff",
    primary: "#fc9286ff",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: "Platillos Típicos",
            // Opcional: forzar orientación vertical en esta pantalla
            // orientation: 'portrait'
          }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{ 
            title: "Detalles del Platillo",
            // Opcional: permitir ambas orientaciones en detalle
            // orientation: 'all'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}