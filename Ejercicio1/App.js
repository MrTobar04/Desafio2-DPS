import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/inicio';
import agregarCita from './components/agregarCita';
import editarScreen from './components/editarCita';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ title: 'Gestión de Citas' }}
        />
        <Stack.Screen 
          name="AgregarCita" 
          component={agregarCita} 
          options={{ title: 'Agendar Nueva Cita' }}
        />
        <Stack.Screen 
          name="EditarCita" 
          component={editarScreen} 
          options={{ title: 'Editar Cita' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}