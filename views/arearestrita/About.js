import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function About({ navigation }) {
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Sobre' navigation={navigation} />
            <ScrollView>
            <Text style={[css.about__titulo]}>O IDEMA</Text>
            <Text style={[css.about__texto]}>O Instituto de Desenvolvimento Sustentável
            e Meio Ambiente do Rio Grande do Norte - IDEMA é uma autarquia fruto da união
            de atribuições entre a Fundação Instituto de Desenvolvimento do RN (IDEC) e a
            Coordenadoria de Meio Ambiente (CMA), estabelecida em 16 de setembro de 1983.

            O IDEMA incorpora as atribuições da então Coordenadoria de Meio Ambiente (CMA),
            também vinculada à SEPLAN/RN, e absorve a
            competência de formular, coordenar, executar e supervisionar a política estadual
            de preservação, conservação, aproveitamento, uso racional e recuperação dos
            recursos ambientais, bem como fiscalizar o cumprimento das normas de proteção,
            controle, utilização e recuperação dos recursos ambientais, aplicando as penalidades
            disciplinares e/ou compensatórias às infrações apuradas.

            No ano de 2008, o órgão ambiental é vinculado à Secretaria de Estado do Meio Ambiente e dos
            Recursos Hídricos (SEMARH/RN), passando a chamar-se Instituto de Desenvolvimento
            Sustentável e Meio Ambiente.

            O órgão reconhece sua data de fundação em 16 de setembro de 1983,  data de
            criação da Coordenadoria de Meio Ambiente, uma vez que a CMA conferiu ao IDEMA
            o seu caráter ambiental.</Text>

            <Text style={[css.about__titulo]}>
                Atribuições
            </Text>  

            <Text style={[css.about__texto]}>  
                - Promoção de Educação Ambiental{"\n"}
                - Licenciamento e Revisão de Atividades Poluidoras{"\n"}
                - Zoneamento Ambiental{"\n"}
                - Aplicação de Penalidades Disciplinares{"\n"}
                - Implantação de Unidades de Conservação{"\n"}
                - Controle Ambiental{"\n"}
                - Controle Florestal
            </Text>

                <Text style={[css.about__titulo]}>
                    Missão
                    </Text>
                <Text style={[css.about__texto]}>
                "Promover a política ambiental do Rio Grande do Norte, visando o desenvolvimento sustentável, aproveitando as potencialidades regionais em busca da melhoria da qualidade de vida da população".
                </Text>
                </ScrollView>
        </View>
    );
}