import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PlatilloCard({ platillo, onPress, isLandscape, isPhone }) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isLandscape && styles.cardLandscape
      ]}
      onPress={onPress}
    >
      <Image 
        source={{ uri: platillo.foto }} 
        style={[
          styles.image,
          isLandscape && isPhone && styles.imageLandscapePhone
        ]} 
      />
      <View style={styles.info}>
        <Text style={styles.nombre}>{platillo.nombre}</Text>
        <Text 
          style={[
            styles.descripcion,
            isLandscape && isPhone && styles.descripcionLandscape
          ]} 
          numberOfLines={isLandscape && isPhone ? 2 : 3}
        >
          {platillo.descripcion}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1C1C1C",
    borderRadius: wp('4.4%'), // ≈ 16px
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: wp('1.7%') }, // ≈ 6px
    shadowOpacity: 0.5,
    shadowRadius: wp('1.7%'), // ≈ 6px
    width: '100%',
  },
  cardLandscape: {
    height: hp('31%'), // ≈ 200px
  },
  image: {
    width: "100%",
    height: hp('28%'), // ≈ 180px
  },
  imageLandscapePhone: {
    height: hp('18.7%'), // ≈ 120px
  },
  info: {
    padding: wp('3.3%'), // ≈ 12px
  },
  nombre: {
    fontSize: wp('5.6%'), // ≈ 20px
    fontWeight: "bold",
    color: "#ff5151ff", 
    marginBottom: hp('0.6%'), // ≈ 4px
  },
  descripcion: {
    fontSize: wp('3.9%'), // ≈ 14px
    color: "#B0B0B0",
  },
  descripcionLandscape: {
    fontSize: wp('3.3%'), // ≈ 12px
  },
});