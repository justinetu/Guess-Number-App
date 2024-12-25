import { StyleSheet, Text, View, Alert, TouchableOpacity, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'

const GameScreen = ({ userNumber, onRoundsSet, onTargetSet, onGameOver }) => {
    let min = 0;
    let max = 100;

    const [randNumber, setRandomNumber]          = useState(Math.floor(Math.random() * (max - min + 1) + min));

    const [OpponentGuesses, setNewOpponentGuess] = useState([{text: randNumber, id: 1}]);

    let [tempCounter, setTempCounter]            = useState(1)
   
    const updateGuessArrayHandler = (rand) => {
        
        setNewOpponentGuess((currentOpponentGuess) => 
            [...currentOpponentGuess, {text: rand, id: tempCounter}])
        console.log(OpponentGuesses)
    }

    const verifyHigherChoice = () => {
        if(randNumber > userNumber) { 
            Alert.alert("Don't lie. You know the answer is lower.")
        }
        else {
            let rand = Math.floor(Math.random() * (max - randNumber + 1) + randNumber)
            checkNumberFound(rand)
            updateRandomNumber(rand)
            updateGuessArrayHandler(rand)
            setTempCounter(++tempCounter)
        }
    }

    const verifyLowerChoice = () => {
        if(randNumber < userNumber) { 
            Alert.alert("Don't lie. You know the answer is higher.")
        }
        else{
            let rand = Math.floor(Math.random() * (randNumber - userNumber) + userNumber)
            console.log(rand)
            checkNumberFound(rand)
            updateRandomNumber(rand)
            updateGuessArrayHandler(rand)
            setTempCounter(++tempCounter)
        }
    }

    const updateRandomNumber = (rand) => {
        setRandomNumber(rand)
    }

    const checkNumberFound = (rand) => {
        if(rand === userNumber) {
            onGameOver();
            onRoundsSet(Object.keys(OpponentGuesses).length);
            onTargetSet(userNumber);
        }
    }

    useEffect(() => {
        min = 0;
        max = 100;
    }, []);

  return (
    <View style={styles.container}>
        <View style={{ marginTop: 50, marginBottom: 30, maxWidth: '70%', width: 300, alignItems: 'center' }}>
                <Text style={styles.firstTextStytle}>Opponent's Guess</Text>
        </View>

        <View style={styles.viewStyle}>
            <Text style={styles.secondTextStyle}>{randNumber}</Text>
        </View>

            <View style={styles.higher_lower_style}>
                <Text style={styles.hi_lo_text}>Higher or lower?</Text>
                <View style = {{ flexDirection: 'row',  width: 250, height: 60, alignItems: 'center', margin: 10, gap: 10 }}>
                    <TouchableOpacity style={styles.btns} onPress={verifyLowerChoice}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 40 }}>-</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btns} onPress={verifyHigherChoice}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 40 }}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    style={{ marginTop: 20 }}
                    data={OpponentGuesses}
                    renderItem={(itemData) => {
                    
                            return (
                                <View style={styles.listViewStyle}>
                                    <Text style={{ marginBottom: 15 }}>#{itemData.item.id}</Text>
                                    <Text style={{ marginRight: 10, marginBottom: 15 }}>Opponent's Guess: {itemData.item.text}</Text>
                                </View>                                
                            )
                    }}
                    keyExtractor={(item) => item.id}
                    />
            </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    firstTextStytle: {
        borderWidth: Platform.select({ ios: 0, android: 3 }), 
        padding: 10, 
        color: 'yellow',
        borderColor: 'yellow', 
        fontSize: 25,
    },
    secondTextStyle: {
        color: '#ddb52f',
        fontSize: 25
    },
    listViewStyle: {
        height: 50,
        width: 360,
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 80,
        borderWidth: 1,
        borderColor: 'maroon',
        flexDirection: 'row',
        gap: 120,
        margin: 10
    },
    viewStyle: {
        margin: 20,
        borderWidth: 4,
        padding: 30,
        borderColor: '#ddb52f', 
        width: 250,
        color: 'gold', 
        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: '900',
        alignItems: 'center'
    },
    higher_lower_style: {
        marginTop: 20,
        backgroundColor: 'maroon',
        height: 150,
        width: 300,
        padding: 30,
        borderRadius: 10,
        alignItems: 'center'
    },
    hi_lo_text: {
        fontWeight: '300',
        fontSize: 20,
        color: 'gold',
    },
    hi_lo_button_view: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'orange'
    },
    btns: {
        backgroundColor: 'orange',
        fontSize: 15,
        borderRadius: 100,
        flex: 0.5,
        height: 50,
        justifyContent: 'center'
    },
    listContainer: {
        flex: 1,
        padding: 16,
        width: 500, 
        height: 500, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})