import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AgendamentoContext } from '../contexts/AgendamentoContext';
import { format, parseISO, isValid } from 'date-fns';

export default function StatusScreen() {
  const { agendamentos } = useContext(AgendamentoContext);

  const renderItem = ({ item }) => {
    let dataOriginal;

    try {
      dataOriginal = typeof item.dataHora === 'string'
        ? parseISO(item.dataHora)
        : new Date(item.dataHora);
    } catch (error) {
      console.error('Erro ao converter data:', item.dataHora);
      dataOriginal = null;
    }

    const dataValida = dataOriginal && isValid(dataOriginal);

    const dataFormatada = dataValida
      ? format(dataOriginal, 'dd/MM/yy')
      : 'Data inválida';

    const horaFormatada = dataValida
      ? format(dataOriginal, 'HH:mm')
      : 'Hora inválida';

    const corStatus = {
      Pendente: '#FACC15',
      Realizado: '#10B981',
      Erro: '#EF4444',
    }[item.status] || '#CBD5E1';

    return (
      <View style={[styles.card, { borderLeftColor: corStatus }]}>
        <Text style={styles.dataHora}>📅 {dataFormatada} às {horaFormatada}</Text>
        <Text style={[styles.status, { color: corStatus }]}>🔁 {item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Status dos Agendamentos</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum agendamento encontrado.</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderLeftWidth: 6,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  dataHora: {
    fontSize: 16,
    marginBottom: 5,
    color: '#1E293B',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  vazio: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: 50,
    fontSize: 16,
  },
});