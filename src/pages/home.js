import React, {useEffect} from 'react';
import { View, Text, BackHandler } from 'react-native';


export default function home() {
  useEffect(()=> {
    BackHandler.addEventListener('hardwareBackPress', ()=> {
      return true
    })
  }, [])
 return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home</Text>
   </View>
  );
}