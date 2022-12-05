import { StyleSheet, Text ,useWindowDimensions} from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {

    const { height, width } = useWindowDimensions();

    let dimensionValue = 380

    if (height > width) {
        dimensionValue = 380;
    } else {
        dimensionValue = 500
    }
    return (
        <>
            <Text style={[styles.instructionText, style,{fontSize: 380 < dimensionValue ? 24 : 30,}]}>
                {children}
            </Text>
        </>
    );
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'ibmPlexSans-Medium',
        color: Colors.accent500,
        textAlign:'center'
    },
})