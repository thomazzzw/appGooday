import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'expo-checkbox';

import Button from '../components/Button';

const AcessScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
        const [isChecked, setChecked] = useState(false);
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.setaVoltar}>‹</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Acesse</Text>
            <Text style={styles.text}>com E-mail e senha</Text>

            <Text style={styles.text}>Email</Text>

            <TextInput
                style={styles.containerTextInput}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />


            <Text style={styles.text}>Senha</Text>

            <TextInput
                style={styles.containerTextInput}
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <View style={styles.containerCheckbox}>
                        <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#20983e' : undefined}
                        />
                        <Text style={styles.textCheckbox}>Lembrar senha</Text>
                        <Text style={styles.textCheckbox}>Esqueci minha senha</Text>
            </View>

            <View style={styles.conatinerBotoes}>
                <Button
                    style={styles.botao1}
                    texto="Acessar"
                    onPress={() => navigation.navigate('nada')}
                    textStyle={styles.textoBranco}
                />
                <Button
                    style={styles.botao2}
                    texto="Cadastrar"
                    onPress={() => navigation.navigate('Cadastro')}
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
    )
}

export default AcessScreen;

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
        borderRadius: 8
    },
    containerCheckbox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textCheckbox: {
        margin: 20,
        fontSize: 10
    },
    conatinerBotoes: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
    },
    botao1: {
        backgroundColor: '#24B26B',
        width: 110,
        margin: 10,
        color: 'white'
    },
    textoBranco: {
        color: 'white'
    },
    botao2: {
        backgroundColor: '#fff',
        width: 110,
        margin: 10,
        borderColor: '#24B26B',
        borderWidth: 1,
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