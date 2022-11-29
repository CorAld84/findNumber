import { StyleSheet, View, Text, } from "react-native";
import Colors from "../../constants/colors";


function Card({ children }) {
    return (
        <>
            <View style={styles.card}>
                {children}
            </View>
        </>
    )
};

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: -5 },
        shadowRadius: 5,
        shadowOpacity: 0.6,
    },
});
