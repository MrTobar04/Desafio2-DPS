import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { obtenerCitas, eliminarCita } from '../services/storage';
import CitaCard from './citas';
import ConfirmacionModal from './confirmacionModal';
import styles from '../styles/global';

const Inicio = ({ navigation }) => {
  const [citas, setCitas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [citaAEliminar, setCitaAEliminar] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      cargarCitas();
    });
    return unsubscribe;
  }, [navigation]);

  const cargarCitas = async () => {
    const citasAlmacenadas = await obtenerCitas();
    // Ordenar citas por fecha (más próximas primero)
    const citasOrdenadas = citasAlmacenadas.sort((a, b) => 
      new Date(a.fecha) - new Date(b.fecha)
    );
    setCitas(citasOrdenadas);
  };

  const handleAgregarCita = () => {
    navigation.navigate('AgregarCita');
  };

  const handleEditarCita = (cita) => {
    navigation.navigate('EditarCita', { cita });
  };

  const solicitarEliminacion = (cita) => {
    setCitaAEliminar(cita);
    setModalVisible(true);
  };

  const confirmarEliminacion = async () => {
    if (citaAEliminar) {
      const exito = await eliminarCita(citaAEliminar.id);
      if (exito) {
        setCitas(prevCitas => prevCitas.filter(c => c.id !== citaAEliminar.id));
        Alert.alert('Éxito', 'Cita eliminada correctamente');
      } else {
        Alert.alert('Error', 'No se pudo eliminar la cita');
      }
    }
    setModalVisible(false);
    setCitaAEliminar(null);
  };

  const cancelarEliminacion = () => {
    setModalVisible(false);
    setCitaAEliminar(null);
  };

  const renderCita = ({ item }) => (
    <CitaCard 
      cita={item} 
      onEditar={handleEditarCita}
      onEliminar={solicitarEliminacion}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
        <Text style={styles.title}>Mis Citas</Text>
        <Text style={{color: '#64748B', fontSize: 16}}>
          {citas.length} {citas.length === 1 ? 'cita' : 'citas'}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleAgregarCita}
        activeOpacity={0.8}
      >
        <Icon name="add" size={24} color="#FFF" style={{marginRight: 8}} />
        <Text style={styles.buttonText}>Agendar Nueva Cita</Text>
      </TouchableOpacity>

      {citas.length > 0 ? (
        <FlatList
          data={citas}
          renderItem={renderCita}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="event-available" size={64} color="#CBD5E1" />
          <Text style={styles.emptyStateText}>No hay citas programadas</Text>
          <Text style={[styles.emptyStateText, {fontSize: 16}]}>
            Presiona el botón superior para agendar una cita
          </Text>
        </View>
      )}

      <ConfirmacionModal
        visible={modalVisible}
        onCancel={cancelarEliminacion}
        onConfirm={confirmarEliminacion}
        mensaje="¿Estás seguro de que deseas eliminar esta cita?"
      />
    </View>
  );
};

export default Inicio;