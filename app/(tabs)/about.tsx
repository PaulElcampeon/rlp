import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Card } from 'react-native-paper';

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      >
      </ImageBackground>
      <View style={styles.card}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardText}>
            <Text style={styles.boldText}>Relationship Love Probe</Text> is an app designed to help you navigate relationships, whether you're dating, married, or getting to know someone.
          </Text>
          <Text style={styles.cardText}>
            It offers key, insightful questions to help you discover shared values, personality traits, and long-term compatibility.
          </Text>
          <Text style={styles.cardText}>
            With <Text style={styles.boldText}>Relationship Love Probe</Text>, you'll be equipped to ask the right questions and make informed decisions about your connection.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBackground: {
    position: 'absolute', // Position the image absolutely
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    width: 200, // Set image width
    height: 200, // Set image height
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
  card: {
    flex: 0.7,
    width: '80%',
    backgroundColor: 'black',
    opacity: 0.8,
  },
  cardText: {
    textAlign: 'center',
    paddingVertical: 0,
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  viewTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});