// styles/global.js - ARCHIVO ACTUALIZADO
import { StyleSheet, Platform } from 'react-native';

// Paleta de colores profesional
const colors = {
  primary: '#2563EB',      // Azul principal
  primaryDark: '#1D4ED8',  // Azul oscuro
  secondary: '#64748B',    // Gris azulado
  success: '#10B981',      // Verde
  danger: '#EF4444',       // Rojo
  warning: '#F59E0B',      // Ámbar
  light: '#F8FAFC',        // Fondo claro
  dark: '#1E293B',         // Texto oscuro
  white: '#FFFFFF',        // Blanco
  gray: '#E2E8F0',         // Gris claro
};

export default StyleSheet.create({
  // Contenedores principales
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 16,
  },
  
  formContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  
  // Encabezados y texto
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 24,
    textAlign: 'center',
  },
  
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: 16,
  },
  
  text: {
    fontSize: 16,
    color: colors.dark,
    lineHeight: 24,
  },
  
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: 8,
  },
  
  // Inputs
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.dark,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  
  inputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  
  // Botones
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: colors.primaryDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  buttonPressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  
  buttonSecondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  
  buttonSecondaryPressed: {
    backgroundColor: colors.gray,
  },
  
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  
  buttonSecondaryText: {
    color: colors.dark,
  },
  
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  
  buttonDangerPressed: {
    backgroundColor: '#DC2626',
  },
  
  // Tarjetas de citas
  citasContainer: {
    flexDirection: 'column',
    marginVertical: 8,
  },
  
  citaCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  citaTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
  },
  
  citaTexto: {
    fontSize: 16,
    color: colors.dark,
    marginBottom: 8,
    lineHeight: 22,
  },
  
  citaFecha: {
    fontSize: 14,
    color: colors.secondary,
    marginTop: 12,
    fontStyle: 'italic',
  },
  
  // Contenedor de acciones
  accionesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 12,
  },
  
  botonAccion: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  
  botonEditar: {
    backgroundColor: colors.warning,
  },
  
  botonEliminar: {
    backgroundColor: colors.danger,
  },
  
  textoBotonAccion: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  
  // Estados vacíos
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  
  emptyStateText: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  
  // Modal de confirmación
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '80%',
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  
  modalText: {
    fontSize: 18,
    color: colors.dark,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 26,
  },
  
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  
  modalButton: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  
  modalButtonCancel: {
    backgroundColor: colors.gray,
  },
  
  modalButtonConfirm: {
    backgroundColor: colors.danger,
  },
  
  textStyle: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  
  // Utilidades
  errorText: {
    color: colors.danger,
    fontSize: 14,
    marginTop: -8,
    marginBottom: 16,
    fontWeight: '500',
  },
  
  section: {
    marginBottom: 24,
  },
  
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 24,
  },
  
  // Para el DateTimePicker
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  
  dateTimeButton: {
    flex: 1,
  },
});