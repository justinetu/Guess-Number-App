import { StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient }from 'expo-linear-gradient';
import StartGameScreen from './start_game_screen';
import GameScreen from './game_screen';
import GameOverScreen from './game_over_screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numRounds, setNumRounds]   = useState();
  const [target, setTarget]         = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function numRoundsHandler(rounds) {
    setNumRounds(rounds);
  }

  function targetNumHandler(target) {
    setTarget(target);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setNumRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen 
        userNumber={userNumber} 
        onRoundsSet={numRoundsHandler} 
        onTargetSet={targetNumHandler}
        onGameOver={gameOverHandler} 
        />
    );
  }

  if (numRounds && target && gameIsOver) {
    screen = (
      <GameOverScreen 
        rounds={numRounds} 
        tgt={target} 
        onStartNewGame={startNewGameHandler}/>
    );
  }

  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/background.jpg')} 
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
    </LinearGradient>
  )
}

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