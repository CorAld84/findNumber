import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';


function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(entered) {
        setEnteredNumber(entered);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInput() {

        const choosedNumber = parseInt(enteredNumber);

        console.log(choosedNumber)

        if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Insert a number between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])

            return;
        }

        onPickNumber(choosedNumber);

    }

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton press={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton press={confirmInput}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </>
    );
};


export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: -5 },
        shadowRadius: 5,
        shadowOpacity: 0.6,
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});
