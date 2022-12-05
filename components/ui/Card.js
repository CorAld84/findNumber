import { StyleSheet, View, Dimensions } from "react-native";
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

const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: widthDimension < 380 ? 10 : 16,
        marginTop: widthDimension < 380 ? 14 : 36,
        marginHorizontal: widthDimension < 380 ? 6 : 24,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: -5 },
        shadowRadius: 5,
        shadowOpacity: 0.6,
        maxHeight: '90%',
        maxWidth: '90%',
    },
});
