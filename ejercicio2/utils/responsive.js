import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

export const responsive = {
  wp,
  hp,
  loc,
  rol
};

// Tamaños de referencia (basados en diseño estándar de 360x640)
export const BASE_WIDTH = 360;
export const BASE_HEIGHT = 640;

// Función para calcular tamaño responsive
export const responsiveSize = (size) => {
  return wp((size / BASE_WIDTH) * 100);
};