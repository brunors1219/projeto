import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function cadastro() {
 
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('')


  
   return (
    <View style={styles.container}>
        <StatusBar hidden/>

        <Image style={{ margin: 50, padding:20}} source={require('../image/logo.png')}/>

        <Text style={styles.Text}>Nome:</Text>
        <TextInput  placeholder="Seu nome..." style={styles.TextInput} onChangeText={text=>setNome(text)} />
        <Text style={styles.Text}>Email:</Text>
        <TextInput  placeholder="Seu email..." style={styles.TextInput} onChangeText={text=>setEmail(text)} />
        <Text style={styles.Text}>Senha:</Text>
        <TextInput  secureTextEntry={true} placeholder="Sua senha..." style={styles.TextInput} onChangeText={text=>setSenha(text)} />
        
        <TouchableOpacity style={styles.button}>
          <Text style= {styles.buttonText}>cadastrar</Text>
        </TouchableOpacity>         

    </View>
   );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },

    Text:{
        color: 'white',
        
    },
    TextInput:{
        width: '100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:10
    },
    button:{
        position: 'absolute',
        backgroundColor: '#d3d3d3',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
});