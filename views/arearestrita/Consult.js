import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";




export default function Consult({ navigation }) {
    return (
        <View style={[css.container, css.containerTop]}>
        <MenuAreaRestrita title='Consulta' navigation={navigation} />

        <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={[css.container, css.darkbg]}>
            
            <ScrollView>

            <View style={css.login__form, css.container}>


                <View style={[css.consultText]}>
                    <Text style={[css.consult__label]}>Preenchar os dados para a consulta.</Text>
                    <TextInput
                        style={css.consult__input}
                        label='teste'
                        placeholder='Enviar Documento...' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='Processos:' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='Nome do interessado:' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='CPF do interessado:' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='RG do interessado:' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='E-Mail do interessado:' />
                </View>

                <View style={[css.consultText]}>

                    <TextInput
                        style={css.consult__input}
                        placeholder='Motivação:' />
                </View>

                <TouchableOpacity style={css.consult__button}>
                    <Text style={css.consult__buttonText}>Consultar</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>

        </KeyboardAvoidingView >
        </View>
    );
}