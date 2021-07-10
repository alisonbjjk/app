import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";


export default function Profile({ navigation }) {

    const [idUser, setIdUser] = useState(null);
    const [verificacao, setVerificacao] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        async function getIdUser() {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    });

    async function sendForm() {
        let response = await fetch('http://192.168.1.99:3000/verifyPass?id=' + idUser + '&verificacao=' + verificacao + '&novaSenha=' + novaSenha + '&confNovaSenha=' + confNovaSenha, {
            method: 'POST',
            body: JSON.stringify({
                id: idUser,
                verificacao: verificacao,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json = await response.json();
        setMsg(json);
    }


    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />



            <View style={[css.profileText]}>
                <Text style={[css.consult__label]}>Redefina os dados de acesso.</Text>

                <TextInput style={css.profile__input} placeholder='Código' onChangeText={text => setVerificacao(text)} />
            </View>

            <View style={[css.profileText]}>
                <TextInput style={css.profile__input} placeholder='Senha' onChangeText={text => setNovaSenha(text)} />
            </View>

            <View style={[css.profileText]}>
                <TextInput style={css.profile__input} placeholder='Confirmar' onChangeText={text => setConfNovaSenha(text)} />
            </View>
            <TouchableOpacity style={css.profile__button} onPress={() => sendForm()}>
                <Text style={css.profile__buttonText}>Trocar</Text>
            </TouchableOpacity>

        </View >
    );
}