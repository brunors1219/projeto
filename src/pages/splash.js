import React from 'react';
import LottieView from 'lottie-react-native';

import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function splash(){
    const navigation = useNavigation()
    return(
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView source={require('../assets/testBlusa.json')}
            autoPlay
            loop={false}
            onAnimationFinish={()=> navigation.navigate('home')}
            />
        </View>
    )
}
