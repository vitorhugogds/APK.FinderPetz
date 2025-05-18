import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { AgendamentoContext } from '../contexts/AgendamentoContext';
import { format } from 'date-fns';

export default function ProgramarScreen() {
  const { adicionarAgendamento } = useContext(AgendamentoContext);
  const [dataHora, setDataHora] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date) => {
    setDataHora(date);
    setDatePickerVisibility(false);
  };

  const handleAgendar = () => {
    if (!dataHora) {
      Alert.alert('Erro', 'Por favor, selecione a data e hora.');
      return;
    }

    adicionarAgendamento(dataHora);
    Alert.alert('Sucesso', 'Agendamento realizado!');
    setDataHora(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Programar Alimentação</Text>

      <TouchableOpacity style={styles.botaoData} onPress={() => setDatePickerVisibility(true)}>
        <Text style={styles.botaoTexto}>
          {dataHora ? format(dataHora, 'dd/MM/yyyy HH:mm') : 'Selecionar Data e Hora'}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />

      <TouchableOpacity style={styles.botaoAgendar} onPress={handleAgendar}>
        <Text style={styles.botaoTexto}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoData: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  botaoAgendar: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 10,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});