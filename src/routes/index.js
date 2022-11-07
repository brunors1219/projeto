import * as react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from "../pages/home";
import splash from "../pages/splash";

const Stack = createNativeStackNavigator();

export default function Approutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="splash" component={splash}/>  
                <Stack.Screen name= "home" component={home}/>
            </Stack.Navigator>  
        </NavigationContainer>
    );
}