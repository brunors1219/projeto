import * as react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from "../pages/home";
import splash from "../pages/splash";
import cadastro from "../pages/cadastro";
import login from "../pages/login";
import splash2 from "../pages/splash copy"

const Stack = createNativeStackNavigator();

export default function Approutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="splash2" component={splash2}/>  
                <Stack.Screen name= "home" component={home}/>
                <Stack.Screen name="cadastro" component={cadastro}/>
                <Stack.Screen name="login" component={login}/>
            </Stack.Navigator>  
        </NavigationContainer>
    );
}