// screens/HomeScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AgendamentoContext } from '../contexts/AgendamentoContext';

export default function HomeScreen() {
  const { executarComando } = useContext(AgendamentoContext);
  const [carregando, setCarregando] = useState(false);

  const handleAbrir = async () => {
    setCarregando(true);
    await executarComando(Date.now());
    setCarregando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FiderPetz 🐾</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={handleAbrir}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.textoBotao}>Abrir Alimentador</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4F46E5',
  },
  botao: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 2,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});