// contexts/AgendamentoContext.js
import React, { createContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

export const AgendamentoContext = createContext();

export function AgendamentoProvider({ children }) {
  const [agendamentos, setAgendamentos] = useState([]);

  const adicionarAgendamento = (dataHora) => {
    const novo = {
      id: Date.now(),
      dataHora: dataHora,
      status: 'Pendente',
    };

    setAgendamentos((prev) => [...prev, novo]);

    const timeout = new Date(dataHora).getTime() - new Date().getTime();

    if (timeout > 0) {
      setTimeout(() => executarComando(novo.id), timeout);
    }
  };

  const executarComando = async (id) => {
    const url = 'http://192.168.0.143/abrir';

    try {
      await fetch(url);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await fetch('http://192.168.0.143/fechar');

      setAgendamentos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: 'Realizado' } : item
        )
      );
    } catch (error) {
      setAgendamentos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: 'Erro' } : item
        )
      );
    }
  };

  return (
    <AgendamentoContext.Provider
      value={{ agendamentos, adicionarAgendamento, executarComando }}
    >
      {children}
    </AgendamentoContext.Provider>
  );
}