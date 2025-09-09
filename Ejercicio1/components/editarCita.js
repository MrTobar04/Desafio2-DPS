import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { actualizarCita, existeCitaDuplicada } from '../services/storage';
import styles from '../styles/global';

const EditarCitaScreen = ({ route, navigation }) => {
  const { cita } = route.params;
  const [cliente, setCliente] = useState(cita.cliente);
  const [vehiculo, setVehiculo] = useState(cita.vehiculo);
  const [fecha, setFecha] = useState(new Date(cita.fecha));
  const [descripcion, setDescripcion] = useState(cita.descripcion || '');
  const [mode, setMode] = useState('date');
  const [showPicker, setShowPicker] = useState(false);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    // Establecer los valores iniciales desde la cita recibida
    setCliente(cita.cliente);
    setVehiculo(cita.vehiculo);
    setFecha(new Date(cita.fecha));
    setDescripcion(cita.descripcion || '');
  }, [cita]);

  const validarFormulario = async () => {
    const nuevosErrores = {};

    // Validar nombre del cliente
    if (cliente.trim().length < 3) {
      nuevosErrores.cliente = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validar modelo del vehículo
    if (vehiculo.trim().length === 0) {
      nuevosErrores.vehiculo = 'El modelo del vehículo es requerido';
    }

    // Validar fecha (debe ser posterior a la actual)
    if (fecha <= new Date()) {
      nuevosErrores.fecha = 'La fecha y hora deben ser posteriores al momento actual';
    }

    // Verificar duplicados (excluyendo la cita actual)
    const esDuplicado = await existeCitaDuplicada(fecha.toISOString(), vehiculo, cita.id);
    if (esDuplicado) {
      nuevosErrores.duplicado = 'Ya existe una cita para este vehículo en la fecha seleccionada';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const onChangeFecha = (event, selectedDate) => {
    // Cerrar el picker después de la selección
    setShowPicker(false);
    
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  const mostrarDatePicker = () => {
    setMode('date');
    setShowPicker(true);
  };

  const mostrarTimePicker = () => {
    setMode('time');
    setShowPicker(true);
  };

  const handleActualizar = async () => {
    if (await validarFormulario()) {
      const citaActualizada = {
        ...cita,
        cliente: cliente.trim(),
        vehiculo: vehiculo.trim(),
        fecha: fecha.toISOString(),
        descripcion: descripcion.trim()
      };

      const exito = await actualizarCita(citaActualizada);
      if (exito) {
        Alert.alert('Éxito', 'Cita actualizada correctamente', [
          { text: 'OK', onPress: () => navigation.navigate('Inicio') }
        ]);
      } else {
        Alert.alert('Error', 'No se pudo actualizar la cita');
      }
    }
  };

  return (
    <ScrollView style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del cliente *"
        value={cliente}
        onChangeText={setCliente}
      />
      {errores.cliente && <Text style={styles.errorText}>{errores.cliente}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Modelo del vehículo *"
        value={vehiculo}
        onChangeText={setVehiculo}
      />
      {errores.vehiculo && <Text style={styles.errorText}>{errores.vehiculo}</Text>}

      {/* Selector de fecha separado */}
      <TouchableOpacity onPress={mostrarDatePicker}>
        <TextInput
          style={styles.input}
          placeholder="Seleccionar fecha *"
          value={fecha.toLocaleDateString()}
          editable={false}
        />
      </TouchableOpacity>

      {/* Selector de hora separado */}
      <TouchableOpacity onPress={mostrarTimePicker}>
        <TextInput
          style={styles.input}
          placeholder="Seleccionar hora *"
          value={fecha.toLocaleTimeString()}
          editable={false}
        />
      </TouchableOpacity>

      {errores.fecha && <Text style={styles.errorText}>{errores.fecha}</Text>}

      {/* DateTimePicker siempre visible pero controlado por modo */}
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={fecha}
          mode={mode}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={onChangeFecha}
        />
      )}

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descripción del problema (opcional)"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline={true}
        numberOfLines={4}
      />

      {errores.duplicado && <Text style={styles.errorText}>{errores.duplicado}</Text>}

      <TouchableOpacity 
        style={styles.button}
        onPress={handleActualizar}
      >
        <Text style={styles.buttonText}>Actualizar Cita</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonSecondaryText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditarCitaScreen;