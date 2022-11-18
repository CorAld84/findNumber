import { Text, View, StyleSheet, } from 'react-native';

import Title from '../components/Title';

function GameScreen() {

    return (
        <>
            <View>
                <Title>
                    Opponent's Guest
                </Title>
            </View>
        </>
    );
};


export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});