import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Input, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from './../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "./../assets/components/MenuAreaRestrita";
import config from "./../config/config";
import { KeyboardAvoidingView } from 'react-native';
/*import { TextInputMask } from 'react-native-masked-text';*/



export default function Rastreio({ navigation }) {

    const [documento, setDocumento] = useState(null)
    const [processos, setProcessos] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [rg, setRg] = useState(null)
    const [email, setEmail] = useState(null)
    const [motivacao, setMotivacao] = useState(null)
    const [isSelected, setSelected] = useState(null)
    const [errorDocumento, setErrorDocumento] = useState(null)
    const [errorProcessos, setErrorProcessos] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorRg, setErrorRg] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorMotivacao, setErrorMotivacao] = useState(null)

    let cpfField = null

    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorCpf(null)

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(email).toLowerCase())) {
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }
        if (!cpfField.isValid()) {
            setErrorCpf("Preencha seu CPF corretamente")
            error = true
        }

        return !error
    }

    async function sendForm() {
        let response = await fetch('http://192.168.1.99:3000/rastreio?name=' + nome + '&password=' + password, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                document: documento,
                process: processos,
                name: nome,
                cpf: cpf,
                rg: rg,
                email: email,
                motivation: motivacao
                
            })
        });
        let json = await response.json();
        if (json === 'error') {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
            await AsyncStorage.clear();
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Externo' navigation={navigation} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={[css.container, css.darkbg]}>

                <ScrollView>

                    <View style={css.externo__form, css.container}>

                        <View style={[css.consultText]}>
                            <Text style={[css.consult__label]}>Preenchar os dados para a consulta.</Text>
                            <TextInput
                                style={css.consult__input}
                                label='teste'
                                placeholder='Enviar Documento...' onChangeText={text => setDocumento(text)} errorMessage={errorDocumento} />
                        </View>

                        <View style={[css.consultText]}>

                            <TextInput
                                style={css.consult__input}
                                placeholder='Processos:' onChangeText={text => setProcessos(text)} errorProcessos={errorProcessos} />
                        </View>

                        <View style={[css.consultText]}>

                            <TextInput
                                style={css.consult__input}
                                placeholder='Nome do interessado:' onChangeText={text => setNome(text)} errorMessage={errorNome} />
                        </View>


                        <View style={[css.consultText]}>

                            <TextInput
                                style={css.consult__input}
                                placeholder='CPF do interessado:' onChangeText={value => {
                                    setCpf(value)
                                    setErrorCpf(null)
                                }}
                                type={'cpf'} keyboardType="number-pad" returnKeyType="done" value={cpf} ref={(ref) => cpfField = ref} errorMessage={errorCpf} />
                        </View>

                        <View style={[css.consultText]}>
                            <TextInput
                                style={css.consult__input}
                                placeholder='RG do interessado:' onChangeText={text => setRg(text)} keyboardType="number-pad" errorMessage={errorRg} />
                        </View>

                        <View style={[css.consultText]}>

                            <TextInput
                                style={css.consult__input}
                                placeholder='E-Mail do interessado:' onChangeText={value => {
                                    setEmail(value)
                                    setErrorEmail(null)
                                }} keyboardType="email-address" errorMessage={errorEmail} />
                        </View>
                        <View style={[css.consultText]}>

                            <TextInput
                                style={css.consult__input}
                                placeholder='Motivação:' onChangeText={text => setMotivacao(text)} errorMessage={errorMotivacao} />
                        </View>

                        <TouchableOpacity style={css.externo__button} onPress={() => sendForm()}>
                            <Text style={css.externo__buttonText}>Enviar</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        </View>
    );
}

