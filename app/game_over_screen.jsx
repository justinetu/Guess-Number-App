import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const GameOverScreen = ({ rounds, tgt, onStartNewGame }) => {
   
  return (
    <View style={styles.container}>
        <View style={styles.border}>
            <Text style={styles.firstTextStyle}>GAME OVER!</Text>
        </View>
        <Image 
            source={require('../assets/images/360_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg')}
            style={styles.imgStyle}
            />
      <Text style={{ fontSize: 25 }}>Your phone needed <Text style={{ color: 'darkorange' }}>{rounds + 1}</Text> rounds</Text>
      <Text style={{ fontSize: 25 }}>to guess the number <Text style={{ color: 'darkorange' }}>{tgt}</Text>.</Text>
      <TouchableOpacity 
        style={{ 
            padding: 15, 
            borderRadius: 100, 
            backgroundColor: 'darkorange', 
            margin: 30 
        }}

        onPress={onStartNewGame}
      >
        <Text style={{
            color: '#fff',
            fontSize: 15
        }}>Start New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        padding: 24,
    },
    firstTextStyle: {
        fontSize: 40,
        color: 'white',
    },
    border: {
        borderWidth: 5,
        borderColor: 'white',
        padding: 10,
        marginTop: deviceWidth < 450 ? '30%' : '15%',
    },
    imgStyle: {
      borderRadius: 200, 
      width: deviceWidth < 450 ? 300 : 50, 
      height: 300, 
      margin: 50
    }
})