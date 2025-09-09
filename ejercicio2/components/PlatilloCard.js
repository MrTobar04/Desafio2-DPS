import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

export default function PlatilloCard({ platillo, onPress }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { width: isLandscape ? width / 2 - 20 : "100%" }, // ancho dinámico
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: platillo.foto }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{platillo.nombre}</Text>
        <Text style={styles.descripcion} numberOfLines={3}>
          {platillo.descripcion}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1C1C1C",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff5151ff", 
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: "#B0B0B0", // gris claro
  },
});
