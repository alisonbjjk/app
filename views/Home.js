import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

    return (
        <View style={css.container2}>
        
        <Image source={require('../assets/img/logorn.png')} style={css.backgroundImage} />
        
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image style={css.button__home} source={require('../assets/img/buttonLogin.png')}/>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Externo')}>
                <Image style={css.button__register} source={require('../assets/img/registration-icon.png')}/>
            </TouchableOpacity>

        
            
        </View>
        
    );
}