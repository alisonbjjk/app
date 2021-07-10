import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b9d554',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage: {
        backgroundColor: 'orange',
        padding: 20
    },

    darkbg: {
        backgroundColor: "#b9d554"
    },
    login__logomarca: {
        marginBottom: 10,
        width: 40,
        height: 50

    },
    login__msg: (text = 'none') => ({
        fontSize: 22,
        color: "red",
        marginBottom: 10,
        display: text
    }),
    login__form: {
        width: "100%",
        paddingTop: "10%"
    },
    login__input: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        borderRadius: 20,

       
        height: 40,
        width: 300,
        alignItems: 'center',
       
     
    },
    login__button: {
        padding: 12,
        backgroundColor: "#007f61",
        alignSelf: "center",
        borderRadius: 10,

    },
    login__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    login__cadastro:{
        fontWeight: "bold",
        fontSize: 14,
        color: "#fff",
        padding: 10,
        textAlign: "center"
    },

    login__img:{
      width: '100%',
      
        
       
        marginBottom: 30
    },

    //Estilo da consulta externa

    externo__form: {
        width: "100%",
        paddingTop: "10%"
    },
    externo__input: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        borderRadius: 20,
        height: 40,
        width: '100%',
        alignItems: 'center',

    },
    externo__button: {
        padding: 12,
        backgroundColor: "#007f61",
        alignSelf: "center",
        borderRadius: 10,

    },
    externo__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    externo__cadastro:{
        fontWeight: "bold",
        fontSize: 14,
        color: "#fff",
        padding: 10,
        textAlign: "center"
    },

    //

    containerTop: {
        justifyContent: 'flex-start'
    },

    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#b9d554',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__home: {
        height: 100,
        width: 100
    },

    button__register:{
        height: 100,
        width: 100
    },

    backgroundImage:{
        flex: 1,
        resizeMode: 'center', // or 'stretch'
       
        
      
      },

    area__tab: {
        backgroundColor: '#90b02d',
        fontSize: 24,
        fontWeight: "bold",
        color: '#006DB8'
    },

    area__menu: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#b9d554',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button__home2: {
        textAlign: 'left',
        color: '#fff'
    },
    area__title: {
        width: '80%',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#007f61',
        textAlign: 'center'
    },
    button__logout: {
        textAlign: 'right'
    },


    profileText: {
        padding: 6
    },

    profile__input: {
        backgroundColor: 'white',
        height: 40,
        width: 300,
        alignItems: 'center',
        borderRadius: 5,
        padding: 4
       
    },

    profile__button: {
        padding: 12,
        backgroundColor: "#007f61",
        alignSelf: "center",
        borderRadius: 8,
        color: "#fff",

    },

    profile__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },

    consult__label:{
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
        padding: 4
    },

    consultText: {
        padding: 6
    },
    
    consult__input: {
        backgroundColor: 'white',
        height: 40,
        width: 300,
        alignItems: 'center',
        borderRadius: 5,
        padding: 4
    },

    consult__button: {
        padding: 8,
        backgroundColor: "#007f61",
        alignSelf: "center",
        borderRadius: 8,
        color: "#fff",
        

    },

    consult__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },

    maskedInput:{
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        
    },

    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 15,
        color: "#f00",
        fontSize: 12
      },



    about__texto:{
        color: "#007f61",
        paddingTop: 10,
     
        textAlign: 'justify',
        paddingLeft: 10,
        paddingRight: 10,
        
    },

    about__titulo:{
        color: "#00634c",
        paddingTop: 10,
        textAlign: "justify",
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "bold",
        fontSize: 20
    }


});
export { css };