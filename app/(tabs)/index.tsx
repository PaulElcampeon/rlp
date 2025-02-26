import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localData from '../data/questions.json';
import { CachedData, QustionMapResponse } from '../types/types';


export default function Index() {
  useEffect(() => {
    fetchDataIfRequired();
    return () => {
    };
  }, []);

  const fetchDataIfRequired = async () => {
    // const cached = await getDataFromCache();
    // if (cached) {
    //   if (isMoreThanSevenDaysOld(cached.timeStamp, Date.now())) {
    //     fetchDataFromServerAndStore();
    //   }
    // } else {
      fetchDataFromServerAndStore();
    // }
  };

  const isMoreThanSevenDaysOld = (date1: number, date2: number) => {
    const timeDifference = Math.abs(date1 - date2);
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    return timeDifference > sevenDaysInMilliseconds;
  }

  async function getDataFromCache(): Promise<CachedData | undefined> {
    try {
      const jsonValue = await AsyncStorage.getItem('@rlp');
      return jsonValue != null ? JSON.parse(jsonValue) : undefined;
    } catch (e) {
      console.error('Failed to load data from AsyncStorage', e);
    }
  };

  const storeData = async (value: QustionMapResponse) => {
    try {
      const data = { timeStamp: Date.now(), data: value }
      await AsyncStorage.setItem('@rlp', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save data to AsyncStorage', e);
    }
  };

  const fetchDataFromServerAndStore = async () => {
    try {
      const response = await fetch('https://relationship-love-probe.co.uk/api/v1/questions/map');
      // const response = await fetch('http://localhost:8080/api/v1/questions/map');
      const data = await response.json();
      console.log(data)
      storeData(data);
    } catch (error) {
      console.error('Error:', error);  // Handle any errors
      console.log("Getting data locally")
      storeData(localData);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      >
      </ImageBackground>
      <Text style={styles.title}>RELATIONSHIP LOVE PROBE</Text>
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
    backgroundColor: 'black',
  },
  imageBackground: {
    borderColor: 'white',
    borderWidth: 5,
    position: 'absolute',
    width: 200,
    height: 200,
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -100 },
      { translateY: -100 },
    ],
  },
  title: {
    position: 'absolute',
    top: '15%',
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Quantico-Regular',
  },
  startButtonContainer: {
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 5,
    padding: 3,
    top: '80%',
    left: '33%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  startButton: {
    borderColor: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 50,
    borderRadius: 100,
  },
  startButtonText: {
    fontSize: 15,
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'Quantico-Regular',
  }
});