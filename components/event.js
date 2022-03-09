import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from '../constants/colors'
import {Entypo} from '@expo/vector-icons';

export default function Event({ pressHandler, item }) {
  return (
    <TouchableOpacity 
      style={styles.itemBox} 
      onPress={() => pressHandler(item)}
      >
      <Text style={styles.fontItem}>{item.value}</Text>
      <Entypo name="chevron-thin-right" size={24} color={Colors.primary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemBox: {
    padding: 20,
    flex:1,
    marginHorizontal:5,
    marginVertical:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: Colors.boxEvent,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  fontItem:{
    fontSize: 40,
    color: Colors.font,
    fontFamily: 'Abel'
  }
});