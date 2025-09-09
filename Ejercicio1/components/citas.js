import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/global';

const CitaCard = ({ cita, onEditar, onEliminar }) => {
  return (
    <View style={styles.citaCard}>
      <Text style={styles.citaTitulo}>{cita.cliente}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
        <Icon name="directions-car" size={18} color="#64748B" style={{marginRight: 8}} />
        <Text style={styles.citaTexto}>{cita.vehiculo}</Text>
      </View>
      
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
        <Icon name="event" size={18} color="#64748B" style={{marginRight: 8}} />
        <Text style={styles.citaTexto}>
          {new Date(cita.fecha).toLocaleDateString()} a las {new Date(cita.fecha).toLocaleTimeString()}
        </Text>
      </View>
      
      {cita.descripcion && (
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <Icon name="build" size={18} color="#64748B" style={{marginRight: 8, marginTop: 2}} />
          <Text style={[styles.citaTexto, {flex: 1}]}>{cita.descripcion}</Text>
        </View>
      )}
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="access-time" size={16} color="#94A3B8" style={{marginRight: 6}} />
        <Text style={styles.citaFecha}>
          Creado: {new Date(cita.creado).toLocaleString()}
        </Text>
      </View>
      
      <View style={styles.accionesContainer}>
        <TouchableOpacity 
          style={[styles.botonAccion, styles.botonEditar]}
          onPress={() => onEditar(cita)}
          activeOpacity={0.8}
        >
          <Icon name="edit" size={16} color="#FFF" />
          <Text style={styles.textoBotonAccion}> Editar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.botonAccion, styles.botonEliminar]}
          onPress={() => onEliminar(cita)}
          activeOpacity={0.8}
        >
          <Icon name="delete" size={16} color="#FFF" />
          <Text style={styles.textoBotonAccion}> Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CitaCard;