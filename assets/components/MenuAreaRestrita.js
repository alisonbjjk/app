import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {css} from "../css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MenuAreaRestrita(props)
{
    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    async function back()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Home');
    }

    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>back()}>
                <Icon name="home" size={20} color='#007f61' />
            </TouchableOpacity>

            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color='#007f61' />
            </TouchableOpacity>
        </View>
    );
}