import AsyncStorage from '@react-native-async-storage/async-storage';

const CITAS_KEY = '@citas_taller';

export const guardarCita = async (cita) => {
  try {
    const citasExistentes = await obtenerCitas();
    const nuevasCitas = [...citasExistentes, cita];
    await AsyncStorage.setItem(CITAS_KEY, JSON.stringify(nuevasCitas));
    return true;
  } catch (error) {
    console.error('Error guardando cita:', error);
    return false;
  }
};

export const obtenerCitas = async () => {
  try {
    const citas = await AsyncStorage.getItem(CITAS_KEY);
    return citas ? JSON.parse(citas) : [];
  } catch (error) {
    console.error('Error obteniendo citas:', error);
    return [];
  }
};

export const actualizarCita = async (citaActualizada) => {
  try {
    const citas = await obtenerCitas();
    const nuevasCitas = citas.map(cita => 
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
    await AsyncStorage.setItem(CITAS_KEY, JSON.stringify(nuevasCitas));
    return true;
  } catch (error) {
    console.error('Error actualizando cita:', error);
    return false;
  }
};

export const eliminarCita = async (id) => {
  try {
    const citas = await obtenerCitas();
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    await AsyncStorage.setItem(CITAS_KEY, JSON.stringify(nuevasCitas));
    return true;
  } catch (error) {
    console.error('Error eliminando cita:', error);
    return false;
  }
};

export const existeCitaDuplicada = async (fecha, vehiculo, excludeId = null) => {
  try {
    const citas = await obtenerCitas();
    return citas.some(cita => {
      const mismaFecha = cita.fecha === fecha;
      const mismoVehiculo = cita.vehiculo.toLowerCase() === vehiculo.toLowerCase();
      const esDiferenteCita = excludeId ? cita.id !== excludeId : true;
      return mismaFecha && mismoVehiculo && esDiferenteCita;
    });
  } catch (error) {
    console.error('Error verificando duplicados:', error);
    return false;
  }
};