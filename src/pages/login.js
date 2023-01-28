import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Image,TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export default function login() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
 return (
   <View style={styles.container}>
    <StatusBar hidden/>

    <Text style={styles.message}>Bem-vindo(a)</Text>

    <Text style={styles.title}>Email</Text>
    <TextInput  placeholder="Digite um email..." style={styles.TextInput} onChangeText={text=>setEmail(text)} />
    <Text style={styles.title}>Senha</Text> 
    <TextInput  secureTextEntry={true} placeholder="Sua senha..." style={styles.TextInput} onChangeText={text=>setSenha(text)} />

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttontext}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
     <Text 
     onPress={() => navigation.navigate('cadastro')}
     style={styles.registerText}
     >Não possui uma conta? Cadastre-se</Text> 
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
  
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },

  TextInput:{
    width: '100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  title:{
    fontSize:24,
    marginTop: 28,
    color:'#fff'
  }
})