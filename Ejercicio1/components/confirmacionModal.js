import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/global';

const ConfirmacionModal = ({ visible, onCancel, onConfirm, mensaje }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center', marginBottom: 16}}>
            <Icon name="warning" size={48} color="#EF4444" />
          </View>
          
          <Text style={styles.modalText}>{mensaje}</Text>
          
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonCancel]}
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonConfirm]}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.textStyle}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmacionModal;