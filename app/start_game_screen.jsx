import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const enteredNumberHandler = (text) => {
      setEnteredNumber(text);
    }
  
    const failNumberOrContinue = () => {
      const chosenNumber = parseInt(enteredNumber);
      if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
        Alert.alert('Uh oh! Invalid entry', 'Choose a number between 0 and 99', [
          {
            text: 'Ok',
            style: 'destructive',
            onPress: resetInputHandler
          }
        ]);
        return;
      }
      onPickNumber(chosenNumber);
    }

    const resetInputHandler = () => {
      setEnteredNumber('');
    }
  return (
    <>
      <View style={{ marginTop: '50%', alignItems: 'center' }}>
          <Text style={{
            borderWidth: Platform.OS === 'android' ? 3 : 0, 
            padding: 10, 
            color: 'yellow',
             borderColor: 'yellow', 
             fontSize: 25,
             fontWeight: '500'
             }}>Guess My Number</Text>
        </View>
        <View style={{
          alignItems: 'center',
          margin: 'auto',
          marginTop: '10%',
          backgroundColor: 'maroon', 
          height: 220, 
          maxHeight: '90%',
          width: 320, 
          maxWidth: '80%',
          borderRadius: 10}}>
            <Text style={styles.textStyle}>Enter a Number</Text>
            <TextInput 
                onChangeText={enteredNumberHandler}
                value={enteredNumber}
                style={{borderBottomWidth: 2, borderColor: 'gold', width: 55, color: 'gold', textAlign: 'center', fontSize: 25, fontWeight: '900'}}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
            />
          <View style={{flexDirection: 'row', margin: 10, flex: 1, flexGrow: 30}}>
            <TouchableOpacity 
                onPress={resetInputHandler}
                style={{marginRight: 10, marginTop: 10, flex: 0.5}}>
              <View style={{backgroundColor: '#723d46', padding: 5, borderRadius: 50, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#fff'}}>Reset</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={failNumberOrContinue}
                style={{marginLeft: 10, marginTop: 10, flex: 0.5}}>
            <View style={{backgroundColor: '#723d46', padding: 5, borderRadius: 50, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#fff'}}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontWeight: '100',
        fontSize: 20,
        color: 'gold',
        marginTop: 30,
        marginBottom: 25
      },
      main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
      },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
      backgroundImage: {
        opacity: 0.15,
      }
})