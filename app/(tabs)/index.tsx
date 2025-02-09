import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Relationship Love Probe</Text>
        </View>
        <View>
        <Link href="/category" asChild>
        <Button mode="contained" style={styles.startButton}>
          Start
        </Button>
      </Link>
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
    flex: 0.8,
    width: '70%',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  startButton: {
    width: '80%',
    alignSelf: 'center',
  },
});