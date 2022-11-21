import { Text, View, StyleSheet, } from 'react-native';
import { useState } from 'react';


import Title from '../components/ui/Title';
import Numbercontainer from '../components/game/NumberContainer';

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return rndNum
    }
}

function GameScreen({ userNumber }) {


    const initialGuessNum = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuessNum);


    return (
        <>
            <View>
                <Title>
                    Opponent's Guest
                </Title>
                <Numbercontainer> {currentGuess} </Numbercontainer>
            </View>
        </>
    );
};


export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});