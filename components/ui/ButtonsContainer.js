import { View, StyleSheet } from "react-native";

function ButtonsContainer({ children }) {
    return (
        <>
            <View style={styles.buttonsContainer}>
                {children}
            </View>
        </>
    )
};

export default ButtonsContainer;

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
})