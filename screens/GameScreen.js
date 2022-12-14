import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'

import Title from '../components/ui/Title';
import Numbercontainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
import ButtonsContainer from '../components/ui/ButtonsContainer';
import ButtonContainer from '../components/ui/ButtonContainer';
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem'

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
    const [guessRound, setGuessRound] = useState([initialGuessNum]);
    const { width, height } = useWindowDimensions();



    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRound.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRound(prevGuessNmb => [newRdnNumber, ...prevGuessNmb]);

    }

    const guessRoundsListLength = guessRound.length;

    let content =
        (<>
            <Numbercontainer>
                {currentGuess}
            </Numbercontainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
                <ButtonsContainer>
                    <ButtonContainer>
                        <PrimaryButton press={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minussquareo" size={30} color={Colors.accent500} />
                        </PrimaryButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <PrimaryButton press={nextGuessHandler.bind(this, 'high')}>
                            <AntDesign name="plussquareo" size={30} color={Colors.accent500} />
                        </PrimaryButton>
                    </ButtonContainer>
                </ButtonsContainer>
            </Card>
        </>);

    if (width > 500) {
        content = (
            <>
                <Card>
                    <InstructionText style={styles.instructionText}>
                        Higher or Lower?
                    </InstructionText>
                    <View style={styles.buttonsWide}>
                        <ButtonsContainer>
                            <ButtonContainer>
                                <PrimaryButton press={nextGuessHandler.bind(this, 'lower')}>
                                    <AntDesign name="minussquareo" size={30} color={Colors.accent500} />
                                </PrimaryButton>
                            </ButtonContainer>
                        </ButtonsContainer>
                        <Numbercontainer>
                            {currentGuess}
                        </Numbercontainer>
                        <ButtonsContainer>
                            <ButtonContainer>
                                <PrimaryButton press={nextGuessHandler.bind(this, 'high')}>
                                    <AntDesign name="plussquareo" size={30} color={Colors.accent500} />
                                </PrimaryButton>
                            </ButtonContainer>
                        </ButtonsContainer>
                    </View>
                </Card>
            </>
        )

    }


    return (
        <>
            <View style={styles.container}>
                <Title>
                    Opponent's Guest
                </Title>
                {content}
                <View style={styles.flatContainer}>
                    <FlatList
                        data={guessRound}
                        renderItem={(itemData) =>
                            <GuessLogItem roundNumber={(guessRoundsListLength - itemData.index)} guess={itemData.item} />
                        }
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        </>
    );
};


export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 20,
    },
    flatContainer: {
        flex: 1,
        padding: 10,
    },
    buttonsWide: {
        flexDirection: 'row',
        alignItems: 'center',


    },

});