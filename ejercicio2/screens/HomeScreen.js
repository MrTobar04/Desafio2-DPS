import React from "react";
import { View, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import PlatilloCard from "../components/PlatilloCard";
import platillosData from "../data/platillos.json";

export default function HomeScreen({ navigation }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.listContainer, isLandscape ? styles.row : styles.column]}>
        {platillosData.map((platillo) => (
          <PlatilloCard
            key={platillo.id}
            platillo={platillo}
            onPress={() => navigation.navigate("Detail", { platillo })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#000",
  },
  listContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
});
