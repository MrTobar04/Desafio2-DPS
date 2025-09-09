# Desafio2-DPS

# 📱 App de Platillos Típicos

Aplicación móvil desarrollada en **React Native con Expo**, que permite visualizar información sobre platillos típicos.  
Cada platillo muestra datos como:  
- Nombre  
- Descripción  
- Imagen  
- Ingredientes  
- Región de origen  (Orgullo Salvadoreño)
- Precio promedio
- Categoría  

La interfaz está diseñada con un estilo **oscuro, moderno y elegante**, utilizando colores **negro, gris y dorado**.  
El diseño es **responsivo con Flexbox**, adaptándose automáticamente a la orientación del dispositivo (vertical u horizontal).  

La navegación se gestiona con **React Navigation (Stack Navigator)**, incluyendo:  
- **Pantalla principal (Home):** lista de platillos en tarjetas.  
- **Pantalla de detalles (Detail):** información completa con ingredientes en formato de “chips”.  

---

## 🚀 Instalación y ejecución

### 🔹 Requisitos previos
Antes de comenzar asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) >= 16  
- [Git](https://git-scm.com/)  
- **Expo Go** en tu celular (Android/iOS) para probar la app sin emulador  

Opcional (para probar en PC):  
- **Android Studio** (para emulador Android)  
---

### 🔹Clonar e instalar dependencias
```bash
git clone <url-del-repositorio>
cd Desafio2-DPS

# Instalar Expo CLI
npm install -g expo-cli

# dependencias
npm install
npm install @react-navigation/native @react-navigation/stack
npm install react-native-responsive-screen
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-get-random-values

#Iniciar proyecto en Expo
npx expo start
#O iniciarlo en un emulador de android studio
npm run android