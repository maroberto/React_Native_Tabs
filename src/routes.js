import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';
import ButtonNew from './components/ButtonNew';
import { Entypo, Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor: '#121212',
          borderTopColor:'transparent',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#fff',

      }}
    >
      <Tab.Screen
       name="Inicio" 
       component={Home} 
       options={{
         tabBarIcon:({size, color}) => (
           <Entypo name="home" size={size} color={color}/>
         )
       }}
      />

      <Tab.Screen
       name="Buscar" 
       component={Search}
       options={{
         tabBarIcon:({size, color}) => (
           <Feather name="search" size={size} color={color}/>
         )
       }} 
      />

      <Tab.Screen 
       name="Novo" 
       component={New}
       options={{
         tabBarLabel:'',
         tabBarIcon:({size, color, focused}) => (
           <ButtonNew size={size} color={color} focused={focused}/>
         )
       }} 
      />

      <Tab.Screen 
       name="Perfil" 
       component={Profile}
       options={{
         tabBarIcon:({size, color}) => (
           <Entypo name="user" size={size} color={color}/>
         )
       }} 
      />

      <Tab.Screen 
       name="Notificação" 
       component={Notification} 
       options={{
         tabBarIcon:({size, color}) => (
           <Entypo name="notification" size={size} color={color}/>
         )
       }}
      />
    </Tab.Navigator>
  )
}