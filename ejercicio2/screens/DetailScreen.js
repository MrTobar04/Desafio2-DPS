import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function DetailScreen({ route }) {
  const { platillo } = route.params;
  const { width, height } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [width, height]);

  const isPhone = width < 768;

  return (
    <ScrollView style={[
      styles.container,
      isLandscape && styles.containerLandscape
    ]}>
      <Image 
        source={{ uri: platillo.foto }} 
        style={[
          styles.image,
          isLandscape && isPhone && styles.imageLandscapePhone,
          isLandscape && !isPhone && styles.imageLandscapeTablet
        ]} 
      />
      <View style={[
        styles.infoContainer,
        isLandscape ? styles.row : styles.column,
        isLandscape && isPhone && styles.infoContainerLandscapePhone
      ]}>
        <View style={[
          styles.textContainer,
          isLandscape && styles.textContainerLandscape
        ]}>
          <Text style={styles.nombre}>{platillo.nombre}</Text>
          <Text style={styles.categoria}>
            {platillo.categoria} • {platillo.region}
          </Text>
          <Text style={styles.precio}>${platillo.precio.toFixed(2)}</Text>
          <Text style={[
            styles.descripcion,
            isLandscape && isPhone && styles.descripcionLandscape
          ]}>{platillo.descripcion}</Text>
        </View>
        <View style={[
          styles.ingredientesContainer,
          isLandscape && styles.ingredientesContainerLandscape
        ]}>
          <Text style={styles.subtitulo}>Ingredientes</Text>
          <View style={styles.chipsContainer}>
            {platillo.ingredientes.map((ing, idx) => (
              <View key={idx} style={[
                styles.chip,
                isLandscape && isPhone && styles.chipLandscape
              ]}>
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
  containerLandscape: {
    paddingHorizontal: wp('1.4%'), // ≈ 5px
  },
  image: {
    width: "100%",
    height: hp('46.9%'), // ≈ 300px
  },
  imageLandscapePhone: {
    height: hp('39%'), // ≈ 250px
  },
  imageLandscapeTablet: {
    height: hp('54.7%'), // ≈ 350px
  },
  infoContainer: {
    padding: wp('5.6%'), // ≈ 20px
  },
  infoContainerLandscapePhone: {
    padding: wp('4.2%'), // ≈ 15px
    gap: wp('2.8%'), // ≈ 10px
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
  },
  textContainerLandscape: {
    marginRight: wp('4.2%'), // ≈ 15px
    flex: 1.2,
  },
  nombre: {
    fontSize: wp('7.8%'), // ≈ 28px
    fontWeight: "bold",
    color: "#ff5151ff",
    marginBottom: hp('0.8%'), // ≈ 5px
  },
  categoria: {
    fontSize: wp('4.4%'), // ≈ 16px
    color: "#B0B0B0",
    marginBottom: hp('0.8%'), // ≈ 5px
  },
  precio: {
    fontSize: wp('5.6%'), // ≈ 20px
    color: "#db7851ff",
    fontWeight: "bold",
    marginBottom: hp('2.3%'), // ≈ 15px
  },
  descripcion: {
    fontSize: wp('4.4%'), // ≈ 16px
    color: "#ccc",
    marginBottom: hp('3.1%'), // ≈ 20px
    lineHeight: hp('3.4%'), // ≈ 22px
  },
  descripcionLandscape: {
    fontSize: wp('4.2%'), // ≈ 15px
    lineHeight: hp('3.1%'), // ≈ 20px
  },
  ingredientesContainer: {
    flex: 1,
  },
  ingredientesContainerLandscape: {
    flex: 0.8,
  },
  subtitulo: {
    fontSize: wp('6.1%'), // ≈ 22px
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: hp('1.6%'), // ≈ 10px
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#1C1C1C",
    paddingVertical: hp('0.9%'), // ≈ 6px
    paddingHorizontal: wp('3.3%'), // ≈ 12px
    borderRadius: wp('3.3%'), // ≈ 12px
    marginRight: wp('2.2%'), // ≈ 8px
    marginBottom: hp('1.2%'), // ≈ 8px
  },
  chipLandscape: {
    paddingVertical: hp('0.8%'), // ≈ 5px
    paddingHorizontal: wp('2.8%'), // ≈ 10px
    marginRight: wp('1.7%'), // ≈ 6px
    marginBottom: hp('0.9%'), // ≈ 6px
  },
  chipText: {
    color: "#FFF",
    fontSize: wp('3.9%'), // ≈ 14px
  },
});