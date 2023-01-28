import React, { Component } from 'react';

import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var logo=require('../image/logo.png');

export default class Splash extends Component
{
    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("home")
        },5000); 

    }
    render()
    {
        return(
            <View
            style={styles.logo}>
                <Image source={logo}></Image>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo:{
        flex: 1,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center'
    }
})