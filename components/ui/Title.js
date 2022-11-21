import { Text, View, StyleSheet, } from 'react-native';

import Colors from '../../constants/colors.js'

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
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        margin: 5,
    }
});