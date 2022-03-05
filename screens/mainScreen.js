import React from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import Colors from '../constants/colors';

function MainScreen ({ }) {
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={30}
            style={styles.screen}
      >
      <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Pantalla en desarrollo</Text>
      </View>
      </View>
   
         </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    screen: {
      width:'100%',
      flex:1,
      padding:10,
      alignItems:'center',
      backgroundColor: Colors.primary,
    },
    container:{
        flexDirection:'column',
    },
    subtitle:{
      padding: 10,
      fontSize: 30,
      textAlign: 'justify',
      color: Colors.font,
      fontFamily:'Abel',
    },
    title:{
      padding: 10,
      fontSize: 30,
      textAlign:'center',
      color:Colors.primary,
    }
  });
  
export default MainScreen;