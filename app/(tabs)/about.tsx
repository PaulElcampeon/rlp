import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
      </ImageBackground>
      <View style={styles.card}>
        <View style={styles.descriptionContainer}>
          <Ionicons name="information-circle" size={30} color="black" />
          <Text style={styles.cardText}>
            <Text style={styles.boldText}>Relationship Love Probe</Text> is an app designed to help you navigate relationships, whether you're dating, married, or getting to know someone.
          </Text>
          <Text style={styles.cardText}>
            It offers key, insightful questions to help you discover shared values, personality traits, and long-term compatibility.
          </Text>
          <Text style={styles.cardText}>
            With <Text style={styles.boldText}>Relationship Love Probe</Text>, you'll be equipped to ask the right questions and make informed decisions about your connection.
          </Text>
          <Text style={styles.cardText}>
            <Text>Contact us</Text>
            {'\n'}        {'\n'}
            <Text style={styles.boldText}>relationship-love-probe@outlook.com</Text>
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
  },
  imageBackground: {
    flex: 1,
    opacity: 0.5
  },
  card: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Quantico-Regular',
  },
  boldText: {
    fontWeight: 'bold',
  },
  viewTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    flex: 0.7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '80%',
    opacity: 0.9,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});