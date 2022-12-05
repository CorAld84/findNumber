import { Text, View, StyleSheet, } from 'react-native';

function Title({ children }) {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {children}
                </Text>
            </View>
        </>
    );
};

export default Title;

const styles = StyleSheet.create({
   
    title: {
        fontFamily: 'ibmPlexSans-Extra',
        fontSize: 24,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 26,
        borderColor: 'white',
        padding: 12,
        maxWidth:'80%',
        width: 300,
    }
});