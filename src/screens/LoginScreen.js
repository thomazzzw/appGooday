import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';

import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../images/casual_dog.png')} />
            <Text style={styles.titulo}>Ótimo dia!</Text>
            <Text style={styles.subtitulo}>Como deseja acessar?</Text>

            <Button
                style={styles.botao1}
                onPress={() => navigation.navigate('')}
            >
                <Image source={require('../../images/Google.png')} style={styles.GoogleImagem} />
                <Text style={styles.textoBotao1}>Como deseja acessar?</Text>
            </Button>

            <Button
                style={styles.botao2}
                texto="Outras opções"
                onPress={() => navigation.navigate('Acess')}
            />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    imagem: {
        width: 300,
        height: 300,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    titulo: {
        fontSize: 32,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 13,
        marginBottom: 9,
        fontWeight: 'bold'
    },
    botao1: {
        backgroundColor: '#24B26B',
        width: 230,
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        margin: 10
    },
    GoogleImagem: {
        backgroundColor: 'white',
        width: 30,
        height: 30
    },
    textoBotao1: {
        color: 'white',
        flex: 1,
        textAlign: 'center'
    },
    botao2: {
        width: 230,
        height: 50,
        borderRadius: 8,
        borderColor: '#24B26B',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});