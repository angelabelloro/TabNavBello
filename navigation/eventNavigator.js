import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartAppScreen from '../screens/startAppScreen';
import EventScreen from '../screens/eventScreen';
import ItemScreen from '../screens/itemScreen';
import Colors from '../constants/colors';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Home',
}
 const EventNavigator = () => {
     return (
        <Stack.Navigator 
            initialRouteName = 'Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                    
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen name={ROUTES.HOME} options={{ title: 'PLANEADOR DE EVENTOS'}} component={StartAppScreen} />
            <Stack.Screen 
            name='Evento' 
            component={EventScreen} 
            options={({ route }) => ({
                title:route.params.name,
            })}
            
            />
            <Stack.Screen name='Tarea' 
            component={ItemScreen} 
            options={({ route }) => ({
                title:route.params.name,
            })}
            />
        </Stack.Navigator>
     );
 }

export default EventNavigator;