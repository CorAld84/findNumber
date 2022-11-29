
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors.js'

//saw 4/25

export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameISOver] = useState(false);
  const [guessRounds, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    'ibmPlexSans-Extra': require('./assets/fonts/IBMPlexSans-ExtraLightItalic.ttf'),
    'ibmPlexSans-Medium': require('./assets/fonts/IBMPlexSans-MediumItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameISOver(false);
  };

  let screens = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  function gameOverHandler(numberOfRound) {
    setGameISOver(true)
    setGuessRound(numberOfRound)
  };

  function onStartNewGame() {
    setUserNumber(null);
    setGameISOver(false);
    setGuessRound(0);
  }

  if (userNumber) {
    screens = <GameScreen
      userNumber={userNumber}
      onGameOver={gameOverHandler}
    />;
  };

  if (gameIsOver) {
    screens = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onStartNewGame={onStartNewGame}
    />;
  };




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
