import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>
                    #{roundNumber}
                </Text>
                <Text style={styles.text}>
                    Opponent's Guess: {guess}
                </Text>
            </View>
        </>
    )
};

export default GuessLogItem;

const styles = StyleSheet.create({
    container: {
        color: Colors.primary800,
        borderRadius: 20,
        borderWidth: 2,
        margin: 10,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.7,
        alignSelf:'center',
        backgroundColor: Colors.accent500
    },
    text: {
        fontFamily: 'ibmPlexSans-Extra'
    }
})