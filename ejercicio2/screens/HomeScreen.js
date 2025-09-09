import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import PlatilloCard from "../components/PlatilloCard";
import platillosData from "../data/platillos.json";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen({ navigation }) {
  const { width, height } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [width, height]);

  const isPhone = width < 768;

  return (
    <ScrollView 
      contentContainerStyle={[
        styles.container,
        isLandscape && styles.containerLandscape
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[
        styles.listContainer,
        isLandscape ? styles.row : styles.column
      ]}>
        {platillosData.map((platillo) => (
          <View key={platillo.id} style={[
            styles.cardWrapper,
            isLandscape && styles.cardWrapperLandscape
          ]}>
            <PlatilloCard
              platillo={platillo}
              onPress={() => navigation.navigate("Detail", { platillo })}
              isLandscape={isLandscape}
              isPhone={isPhone}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp('2.7%'), // ≈ 10px en base 360
    backgroundColor: "#000",
    flexGrow: 1,
  },
  containerLandscape: {
    padding: wp('4%'), // ≈ 15px en base 360
  },
  listContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  cardWrapper: {
    width: '100%',
    marginBottom: hp('2.3%'), // ≈ 15px en base 640
  },
  cardWrapperLandscape: {
    width: '48%', // Dos columnas en landscape
  },
});