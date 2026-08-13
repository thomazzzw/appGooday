import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Button from '../components/Button';

const CadastroScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return (
        <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.setaVoltar}>‹</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Cadastrar-se</Text>
            <Text style={styles.text}>informe seu E-mail e crie uma senha</Text>

            <Text style={styles.text}>Email</Text>

            <TextInput
                style={styles.containerTextInput}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />


            <Text style={styles.text}>Crie uma senha</Text>

            <TextInput
                style={styles.containerTextInput}
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />

            <Text style={styles.text}>Repita a senha</Text>

            <TextInput
                style={styles.containerTextInput}
                placeholder='Digite sua senha'
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                secureTextEntry={true}
            />
            <View style={styles.conatinerBotoes}>
                <Button
                    style={styles.botao1}
                    texto="Cadastrar"
                    onPress={() => navigation.navigate('Acess')}
                    textStyle={styles.textoBranco}
                />
            </View>
            <View style={styles.containerRedes}>
                <View style={styles.linha} />
                <Text style={styles.text}>Ou continue com</Text>
                <View style={styles.linha} />
            </View>
            <View style={styles.linhaRedes}>
                <Image style={styles.imagens} source={require('../../images/Google.png')} />
                <Image style={styles.imagens} source={require('../../images/Facebook.png')} />
            </View>
        </View>
        </ScrollView>
    )
}

export default CadastroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    setaVoltar: {
        fontSize: 50,
        color: '#24B26B'
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 10
    },
    containerTextInput: {
        backgroundColor: '#bed0db',
        height: 50,
        padding: 10,
        color: '#57676b',
        borderRadius: 8,
    },
    conatinerBotoes: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
    },
    botao1: {
        backgroundColor: '#24B26B',
        width: 230,
        margin: 10,
        color: 'white'
    },
    textoBranco: {
        color: 'white'
    },
    containerRedes: {
        alignItems: 'center',
        marginVertical: 20,
        flexDirection: 'row',
    },
    linha: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    linhaRedes: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    imagens: {
        width: 70,
        height: 70,
        marginHorizontal: 10,
        resizeMode: 'contain',

    }
});