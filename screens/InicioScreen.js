import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function InicioScreen() {
  const [carregando, setCarregando] = useState(false);

  const alimentarPet = async () => {
    try {
      setCarregando(true);
      await fetch('http://192.168.0.143/acionar');
      setTimeout(() => {
        setCarregando(false);
      }, 3000);
    } catch (error) {
      console.error('Erro ao acionar o NodeMCU:', error);
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alimentador Automático</Text>
      <TouchableOpacity style={styles.botao} onPress={alimentarPet} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.textoBotao}>Alimentar Agora</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});