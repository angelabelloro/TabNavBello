import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreen";
import Colors from "../constants/colors"

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.body : '',
                
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.body,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
        >
            <Stack.Screen name="Upgrades" component={MainScreen}/>
        </Stack.Navigator>
    )
}

export default NotificationNavigator;