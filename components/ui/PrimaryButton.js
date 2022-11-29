import { View, Text, StyleSheet, Pressable } from 'react-native';

import Colors from '../../constants/colors.js'

function PrimaryButton({ children, press}) {

    function pressHandle() {
        console.log('pressed touch user')
    }
    return (
        <>

            <View style={styles.buttonOuterContainer}>
                <Pressable
                    style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                    onPress={press}
                    android_ripple={{ color: Colors.primary500 }}
                >
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </Pressable>
            </View>

        </>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 5,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 4,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        
    },
    pressed: {
        opacity: 0.9,

    },

});