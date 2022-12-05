import { StyleSheet, View, Image, Text, Dimensions} from "react-native";
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

export default GameOverScreen;

const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: widthDimension < 380 ? 250 : 300,
        height: widthDimension < 380 ? 250 : 300,
        borderRadius: widthDimension < 380 ? 160 : 200,
        borderWidth: widthDimension < 380 ? 2 : 3,
        borderColor: Colors.accent500,
        margin: widthDimension < 380 ? 22 : 36,
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