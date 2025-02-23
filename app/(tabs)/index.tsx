import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      >
      </ImageBackground>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>Relationship Love Probe</Text>
      </View>
      <View style={styles.startButtonContainer}>
        <Link href="/category" asChild>
          <Button mode="contained" style={styles.startButton} labelStyle={styles.startButtonText}>
            Start
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
    backgroundColor: 'black',
  },
  cardContent: {
    position: 'absolute', 
    top: '65%', 
    width: '100%', 
    alignItems: 'center', 
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  startButtonContainer: {
    position: 'absolute', 
    top: '75%', 
    width: '100%', 
    alignItems: 'center',
  },
  startButton: {
    borderWidth: 3, 
    borderColor: 'white',
    backgroundColor: 'black',
    display: 'flex',
  },
  startButtonText: {
    fontSize: 18, 
    color: 'white', 
  },
  imageBackground: {
    position: 'absolute', 
    top: '50%', 
    left: '50%',
    width: 200, 
    height: 200,
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});