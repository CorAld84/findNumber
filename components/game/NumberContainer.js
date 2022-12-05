import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import Colors from '../../constants/colors';


function Numbercontainer({ children }) {

    const { height, width } = useWindowDimensions();

    let dimensionValue = 380

    if (height > width) {
        dimensionValue = 380;
    } else {
        dimensionValue = 500
    }

    return (
        <View style={[styles.container, {
            padding: 380 <= dimensionValue ? 8 : 34,
            margin: 380 <= dimensionValue ? 8 : 34,
        }]}
        >
            <Text style={[styles.numberText,{fontSize: 380 < dimensionValue ? 26 : 36,}]}>
                {children}
            </Text>
        </View>
    )
}

export default Numbercontainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: Colors.accent500,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'ibmPlexSans-Medium',
        color: Colors.accent500,
        
        //fontWeight: 'bold',

    },

})