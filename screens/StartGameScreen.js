import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState } from 'react';


import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors.js';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
import ButtonsContainer from '../components/ui/ButtonsContainer';
import ButtonContainer from '../components/ui/ButtonContainer';



function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(entered) {
        setEnteredNumber(entered);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInput() {

        const choosedNumber = parseInt(enteredNumber);

        if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Insert a number between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])

            return;
        }

        onPickNumber(choosedNumber);

    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <>
            <ScrollView style={styles.scroll}>
                <KeyboardAvoidingView
                    behavior='position'
                    style={styles.keyboard}
                >
                    <View style={[styles.screenContainer, { marginTop: marginTopDistance }]}>
                        <Title>Guess my Number</Title>
                        <Card>
                            <InstructionText >Enter a Number from 1 to 99</InstructionText>
                            <TextInput
                                style={styles.textInput}
                                maxLength={2}
                                keyboardType='number-pad'
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={numberInputHandler}
                                value={enteredNumber}
                            />
                            <ButtonsContainer>
                                <ButtonContainer>
                                    <PrimaryButton press={resetInputHandler}>
                                        Reset
                                    </PrimaryButton>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <PrimaryButton press={confirmInput}>
                                        Confirm
                                    </PrimaryButton>
                                </ButtonContainer>
                            </ButtonsContainer>
                        </Card>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
};


export default StartGameScreen;

//const heightDimension = Dimensions.get('window').height;

const styles = StyleSheet.create({

    screenContainer: {
        flex: 1,
        alignItems: 'center',
        //marginTop: heightDimension < 400 ? 30 : 100,
    },
    keyboard: {
        flex: 1,
    },
    scroll: {
        flex: 1
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
