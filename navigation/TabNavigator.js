import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProgramScreen from '../screens/ProgramScreen';
import StatusScreen from '../screens/StatusScreen'; // <-- IMPORTANTE: Importa a tela
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'home';
          } else if (route.name === 'Programar') {
            iconName = 'calendar';
          } else if (route.name === 'Status') {
            iconName = 'clipboard';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Programar" component={ProgramScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
}
