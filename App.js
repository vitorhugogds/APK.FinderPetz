import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProgramarScreen from './screens/ProgramScreen'; // Corrigido aqui
import StatusScreen from './screens/StatusScreen';
import { AgendamentoProvider } from './contexts/AgendamentoContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AgendamentoProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Início') iconName = 'home';
              else if (route.name === 'Programar') iconName = 'calendar';
              else if (route.name === 'Status') iconName = 'list';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4F46E5',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Início" component={HomeScreen} />
          <Tab.Screen name="Programar" component={ProgramarScreen} />
          <Tab.Screen name="Status" component={StatusScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AgendamentoProvider>
  );
}