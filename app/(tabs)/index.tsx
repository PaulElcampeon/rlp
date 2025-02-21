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
    position: 'absolute', // Position the image absolutely
    top: '65%', // Center vertically
    width: '100%', // Make sure it spans the full width of the container
    alignItems: 'center', // Ensure content is centered horizontally
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  startButtonContainer: {
    position: 'absolute', // Position the image absolutely
    top: '75%', // Place it below the text
    width: '100%', // Make sure it spans the full width of the container
    alignItems: 'center', // Ensure content is centered horizontally
  },
  startButton: {
    borderWidth: 3, // Add border width
    borderColor: 'white',
    backgroundColor: 'black',
    display: 'flex',
  },
  startButtonText: {
    fontSize: 18, // Set the font size of the button text
    color: 'white', // Set the text color of the button
  },
  imageBackground: {
    position: 'absolute', // Position the image absolutely
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    width: 200, // Set image width
    height: 200, // Set image height
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});