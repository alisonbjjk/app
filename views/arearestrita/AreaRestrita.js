import React, {useState,useEffect} from 'react';
import {Text, View, Button, BackHandler, Alert} from 'react-native';
import {css} from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile, Consult, About, } from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from './List';


export default function AreaRestrita({navigation}) {

    const Tab = createMaterialBottomTabNavigator();
    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

//Função para alertar sobre sair do app
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    navigation.navigate('Login');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);


    return (
        
        <Tab.Navigator
                activeColor='#fff'
                inactiveColor='#c2c2c2'
                barStyle={css.area__tab}
                
        >
            <Tab.Screen 
                    name="Inicio"
                    
                    component={List}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="home" size={20} color= '#fff' />
                    )
                }}
            />
            <Tab.Screen 
                    name="Perfil"
                    
                    component={Profile}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color= '#fff' />
                    )
                }}
            />
            <Tab.Screen
                    name="Consulta"
                    component={Consult}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="search" size={20} color='#fff' />
                    )
                }}
            />
            <Tab.Screen
                    name="Sobre"
                    component={About}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="question" size={20}  color='#fff' />
                    )
                }}
            />
        </Tab.Navigator>
        
    );

   

 

}