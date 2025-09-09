import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

export default function DetailScreen({ route }) {
  const { platillo } = route.params;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: platillo.foto }} style={styles.image} />
      <View style={[styles.infoContainer, isLandscape ? styles.row : styles.column]}>
        <View style={styles.textContainer}>
          <Text style={styles.nombre}>{platillo.nombre}</Text>
          <Text style={styles.categoria}>
            {platillo.categoria} • {platillo.region}
          </Text>
          <Text style={styles.precio}>${platillo.precio.toFixed(2)}</Text>
          <Text style={styles.descripcion}>{platillo.descripcion}</Text>
        </View>
        <View style={styles.ingredientesContainer}>
          <Text style={styles.subtitulo}>Ingredientes</Text>
          <View style={styles.chipsContainer}>
            {platillo.ingredientes.map((ing, idx) => (
              <View key={idx} style={styles.chip}>
                <Text style={styles.chipText}>{ing}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  nombre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff5151ff",
    marginBottom: 5,
  },
  categoria: {
    fontSize: 16,
    color: "#B0B0B0",
    marginBottom: 5,
  },
  precio: {
    fontSize: 20,
    color: "#db7851ff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  descripcion: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
  },
  ingredientesContainer: {
    flex: 1,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF", // título ingredientes en blanco
    marginBottom: 10,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#1C1C1C",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  chipText: {
    color: "#FFF", // ingredientes en blanco
    fontSize: 14,
  },
});
