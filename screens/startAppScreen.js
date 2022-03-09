import React, {useState} from "react";
import { 
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    StyleSheet,
    KeyboardAvoidingView,
    Alert,
 } from "react-native";
import Colors from "../constants/colors";

import Event from "../components/event";
import AddItem from "../components/addItem";
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, selectEvent} from '../store/actions/events.actions';

 const StartAppScreen = ({ navigation, route }) => {

    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    const eventList = useSelector(state => state.events.eventList);

    const handleChangeText = (text) => {
      setTextInput(text)
    }
  
    const handleOnPress = () => {
      if (textInput.length>2){
      setTextInput('')
      dispatch(addEvent(
        {
          value: textInput, 
          id: Math.random().toString(),
        }
      ));
    } else{
      Alert.alert('Ops,', 'debes ingresar un nombre con un minimo de 3 letras',[
        {text: 'Ok', onPress: () => console.log('cerro alerta de evento')}
      ]);
    }
    }
   /* const onPressEvent = (item) => () => {
      setEventSelected(item)
    }*/

    const handleEventSelected = (item) => {
      dispatch(selectEvent(item.id));
      navigation.navigate ('Evento', {
        name:item.value});
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={30}
            style={styles.screen}
      >
        <React.Fragment>
      <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Por favor ingresa el nombre de tu ocasión o evento</Text>
      </View>
      <AddItem
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
        />
        <FlatList
          data={eventList}
          renderItem={({ item }) => (
            <Event item={item} pressHandler={handleEventSelected} />
          )
          }
          numColumns={2}
          keyExtractor={item => item.id}
        />
    </View>
    </React.Fragment>
         </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex:1,
      padding:10,
      alignItems:'center',
      backgroundColor: Colors.body,
    },
    container:{
        flexDirection:'column',
    },

    subtitle:{
      padding: 10,
      fontSize: 18,
      textAlign: 'justify',
      color: Colors.font,
      fontFamily: 'Abel',
      //backgroundColor: Colors.header,
    }
  });
  
 export default StartAppScreen;