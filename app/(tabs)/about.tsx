import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Card } from 'react-native-paper';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardText}>
            <Text style={styles.viewTitle}>About</Text>
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardText}>
            <Text style={styles.boldText}>Relationship Love Probe</Text> is an app designed to help you navigate relationships, whether you're dating, married, or getting to know someone. It offers key, insightful questions to help you discover shared values, personality traits, and long-term compatibility.
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
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 0.75,
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 0,
    fontSize: 16,
    color: '#000',
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