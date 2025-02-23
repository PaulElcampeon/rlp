import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  // const [loaded, error] = useFonts({
  //   'LondrinaShadow-Regular': require('../../assets/fonts/LondrinaShadow-Regular.ttf'),
  //   'Allura-Regular': require('../../assets/fonts/Allura-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
      </ImageBackground>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.logo}
        resizeMode="contain"
      >
      </ImageBackground>
        <Text style={styles.cardText1}>Relationship</Text>
        <Text style={styles.cardText2}>LOVE</Text>
        <Text style={styles.cardText3}>PROBE</Text>

      <View style={styles.startButtonContainer}>
        <Link href="/category" asChild>
          <Button mode="contained" style={styles.startButton} labelStyle={styles.startButtonText}>
            START
          </Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  cardText1: {
    position: 'absolute', 
    top: '10%', 
    fontSize: 45,
    textAlign: 'center',
    color: '#eb493a',
    // fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Allura-Regular'
  },
  cardText2: {
    position: 'absolute', 
    top: '20%', 
    fontSize: 90,
    textAlign: 'center',
    fontFamily: "LondrinaShadow-Regular",
    letterSpacing: 12
  },
  cardText3: {
    position: 'absolute', 
    top: '37%', 
    fontSize: 25,
    textAlign: 'center',
    color: '#eb493a',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  startButtonContainer: {
    position: 'absolute', 
    top: '75%', 
    width: '100%', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    borderRadius: 200,
    borderWidth: 4, 
    borderColor: 'black',
    backgroundColor: '#eb493a',
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', //
  },
  startButtonText: {
    letterSpacing: 3,
    fontSize: 20, 
    color: 'black', 
    fontWeight: 'bold',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute', 
    top: '45%', 
    width: 200, 
    height: 200,
    backgroundColor: 'black',
    borderWidth: 5,
    borderColor: '#eb493a',
  },
});