import React, {useEffect} from 'react';
import { View, Text, BackHandler,Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function home() {
  const navigation = useNavigation();
 
 return (
  <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Animatable.Image
        animation={"flipInY"}
        source={require('../assets/logo.png')}
        style={{width: '100%'}}
        resizeMode="contain"
      />
    </View>
    
    <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerForm}>
      <Text style={styles.title}>Bem Vindo a Repono</Text>
      <Text style={styles.text} >Faça cadastro se não é cliente</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('cadastro')}
        style={styles.button}
        >
          <Text style= {styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('login')}
        style={styles.button2}
        >
          <Text style= {styles.buttonText2}>Acessar</Text>
        </TouchableOpacity>

     
      </Animatable.View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
  containerLogo:{
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24, 
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: 'blue',
  }, 
  button:{
    position: 'absolute',
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingVertical: 5,
    width: '60%',
    alignSelf: 'center',
    bottom:'10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  button2:{
    position: 'absolute',
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    paddingVertical: 5,
    marginBottom:50,
    width: '60%',
    alignSelf: 'center',
    bottom:'10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText2:{
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  }
})