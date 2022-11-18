import { View, Text, StyleSheet, Pressable } from 'react-native';

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
                    android_ripple={{ color: '#640233c' }}
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
        backgroundColor: '#72063c',
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.9,

    },

});