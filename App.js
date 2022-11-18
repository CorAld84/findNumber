
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors.js'

//saw 4/15

export default function App() {

  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  };


  let screens = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screens = <GameScreen />;
  }



  return (
    <>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dice.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView
            style={styles.safeAreaContainer}
          >
            {screens}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    opacity: 0.25,
  },


});
