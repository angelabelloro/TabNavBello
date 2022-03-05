import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/colors";
import {MaterialIcons} from '@expo/vector-icons';

import AppNavigator from "./appNavigator";
import EventNavigator from "./eventNavigator";
import NotificationNavigator from "./notificationNavigator";
import UserNavigator from "./userNavigator";




const Tab = createBottomTabNavigator()

function tabNavigator() {
    return(
        <Tab.Navigator 
        initialRouteName="App"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {...styles.shadow, ...styles.tabBar},
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={AppNavigator} 
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <MaterialIcons name="home"size={28} color={Colors.font} />
                    </View>
                )
                }}
            />
          <Tab.Screen 
            name="App" 
            component={EventNavigator} 
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <MaterialIcons name="dashboard"size={28} color={Colors.font} />
                    </View>
                )
                }}
            />

            <Tab.Screen 
            name="Notifications" 
            component={NotificationNavigator} 
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <MaterialIcons name="notifications"size={28} color={Colors.font} />
                    </View>
                )
                }}
            />
            <Tab.Screen 
            name="User" 
            component={UserNavigator} 
            options={{
                tabBarIcon: () => (
                    <View style={styles.item}>
                        <MaterialIcons name="face"size={28} color={Colors.font} />
                    </View>
                )
                }}
            />
         </Tab.Navigator>
    )
    }
const styles = StyleSheet.create ({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
      },
      tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 80,
        backgroundColor:Colors.tab,
      },
      item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
export default tabNavigator;