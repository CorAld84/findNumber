import { Text, View, StyleSheet, Alert, } from 'react-native';
import { useState, useEffect } from 'react';

import Title from '../components/ui/Title';
import Numbercontainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton'

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({ userNumber, onGameOver }) {


    const initialGuessNum = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuessNum);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {

        if ((direction === 'lower' && userNumber > currentGuess) || (direction === 'high' && userNumber < currentGuess)) {
            Alert.alert('Dont lie!', 'You Know this is wrong!!!', [{ text: 'Sorry!', style: 'default' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;

        } else {
            minBoundary = currentGuess;

        }

        const newRdnNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRdnNumber);
    }


    return (
        <>
            <View>
                <Title>
                    Opponent's Guest
                </Title>
                <Numbercontainer>
                    {currentGuess}
                </Numbercontainer>
                <View>
                    <Text>
                        Higher or Lower?
                    </Text>
                    <View>
                        <PrimaryButton press={nextGuessHandler.bind(this, 'lower')}>
                            -
                        </PrimaryButton>
                        <PrimaryButton press={nextGuessHandler.bind(this, 'high')}>
                            +
                        </PrimaryButton>
                    </View>
                </View>
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