import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { guardarCita, existeCitaDuplicada } from '../services/storage';
import styles from '../styles/global';

const AgregarCita = ({ navigation }) => {
  const [cliente, setCliente] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [descripcion, setDescripcion] = useState('');
  const [mode, setMode] = useState('date');
  const [showPicker, setShowPicker] = useState(false);
  const [errores, setErrores] = useState({});
  const [isFocused, setIsFocused] = useState({});

  const validarFormulario = async () => {
    const nuevosErrores = {};

    if (cliente.trim().length < 3) {
      nuevosErrores.cliente = 'El nombre debe tener al menos 3 caracteres';
    }

    if (vehiculo.trim().length === 0) {
      nuevosErrores.vehiculo = 'El modelo del vehículo es requerido';
    }

    if (fecha <= new Date()) {
      nuevosErrores.fecha = 'La fecha y hora deben ser posteriores al momento actual';
    }

    const esDuplicado = await existeCitaDuplicada(fecha.toISOString(), vehiculo);
    if (esDuplicado) {
      nuevosErrores.duplicado = 'Ya existe una cita para este vehículo en la fecha seleccionada';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const onChangeFecha = (event, selectedDate) => {
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

  const handleGuardar = async () => {
    if (await validarFormulario()) {
      const nuevaCita = {
        id: Date.now().toString(),
        cliente: cliente.trim(),
        vehiculo: vehiculo.trim(),
        fecha: fecha.toISOString(),
        descripcion: descripcion.trim(),
        creado: new Date().toISOString()
      };

      const exito = await guardarCita(nuevaCita);
      if (exito) {
        Alert.alert('Éxito', 'Cita agendada correctamente', [
          { text: 'OK', onPress: () => navigation.navigate('Inicio') }
        ]);
      } else {
        Alert.alert('Error', 'No se pudo guardar la cita');
      }
    }
  };

  const handleFocus = (field) => {
    setIsFocused({...isFocused, [field]: true});
  };

  const handleBlur = (field) => {
    setIsFocused({...isFocused, [field]: false});
  };

  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.title}>Agendar Nueva Cita</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Nombre del cliente *</Text>
        <TextInput
          style={[styles.input, isFocused.cliente && styles.inputFocused]}
          placeholder="Ingrese el nombre completo"
          value={cliente}
          onChangeText={setCliente}
          onFocus={() => handleFocus('cliente')}
          onBlur={() => handleBlur('cliente')}
        />
        {errores.cliente && <Text style={styles.errorText}>{errores.cliente}</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Modelo del vehículo *</Text>
        <TextInput
          style={[styles.input, isFocused.vehiculo && styles.inputFocused]}
          placeholder="Ej: Toyota Corolla 2020"
          value={vehiculo}
          onChangeText={setVehiculo}
          onFocus={() => handleFocus('vehiculo')}
          onBlur={() => handleBlur('vehiculo')}
        />
        {errores.vehiculo && <Text style={styles.errorText}>{errores.vehiculo}</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Fecha y hora *</Text>
        <View style={styles.dateTimeContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.buttonSecondary, styles.dateTimeButton]}
            onPress={mostrarDatePicker}
          >
            <Icon name="event" size={20} color="#2563EB" style={{marginRight: 8}} />
            <Text style={styles.buttonSecondaryText}>
              {fecha.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.buttonSecondary, styles.dateTimeButton]}
            onPress={mostrarTimePicker}
          >
            <Icon name="access-time" size={20} color="#2563EB" style={{marginRight: 8}} />
            <Text style={styles.buttonSecondaryText}>
              {fecha.toLocaleTimeString()}
            </Text>
          </TouchableOpacity>
        </View>
        {errores.fecha && <Text style={styles.errorText}>{errores.fecha}</Text>}
      </View>

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

      <View style={styles.section}>
        <Text style={styles.label}>Descripción del problema</Text>
        <TextInput
          style={[styles.input, styles.textArea, isFocused.descripcion && styles.inputFocused]}
          placeholder="Describa el problema o servicio requerido (opcional)"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline={true}
          numberOfLines={4}
          onFocus={() => handleFocus('descripcion')}
          onBlur={() => handleBlur('descripcion')}
        />
      </View>

      {errores.duplicado && <Text style={styles.errorText}>{errores.duplicado}</Text>}

      <TouchableOpacity 
        style={styles.button}
        onPress={handleGuardar}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          <Icon name="save" size={20} color="#FFF" style={{marginRight: 8}} />
          Guardar Cita
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonSecondaryText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AgregarCita;