import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>FiderPetz - Amor em cada porção 💙</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C9F70',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  slogan: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#4C9F70',
    fontWeight: 'bold',
  },
});