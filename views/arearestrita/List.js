import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";


export default function List({ navigation }) {
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Inicio' navigation={navigation} />
            <ScrollView>

            <TouchableOpacity style={css.profile__button}>
                <Text style={css.profile__buttonText}>adasdjlasd</Text>
            </TouchableOpacity>

            </ScrollView>
        </View>
    );
}