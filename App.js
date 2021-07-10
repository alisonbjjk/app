import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Externo from './views/Externo';
import AreaRestrita from "./views/arearestrita/AreaRestrita";

export default function App() {

  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator>   
        <Stack.Screen
                name="Login"
                component={Login}
                options={{
                headerShown:false,
                title:"IDEMA Tecnologia",
                headerStyle:{backgroundColor:"#0080C6"},
                headerTintColor:'#fff',
                headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
            }}
        />
       <Stack.Screen name="Externo" options={{headerShown:false}} component={Externo} />
       <Stack.Screen name="AreaRestrita" options={{headerShown:false}} component={AreaRestrita} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
);
}