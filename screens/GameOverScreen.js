import { StyleSheet, View, Image, Text} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from '../components/ui/Title';
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <>
            <View style={styles.container}>
                <Title>GAME OVER!!!</Title>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/GameOver.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Your Phone needed <Text style={styles.extraText} >{roundsNumber}</Text> rounds to guess the number <Text style={styles.extraText} >{userNumber}</Text>
                    </Text>
                </View>
                <View style={styles.button}>
                    <PrimaryButton press={onStartNewGame}>
                        New Game?
                    </PrimaryButton>
                </View>
            </View>
        </>
    )
}

// /Users/Aldolo/Desktop/devFolder/reactNative/findNumber/assets/images/GameOver.png

export default GameOverScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //justifyContent: 'center',
        alignContent: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.accent500,
        margin: 36,
        overflow: "hidden",
        justifyContent: 'center',
        alignContent: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        alignItems: 'center'
    },
    text: {
        fontFamily: 'ibmPlexSans-Extra',
        fontSize: 16,
        marginVertical: 25,
    },
    extraText: {
        fontFamily: 'ibmPlexSans-Medium',
        fontSize: 20,
        color: Colors.accent500
    },
    button: {
        width: '60%',
        alignSelf: 'center'
    }


});