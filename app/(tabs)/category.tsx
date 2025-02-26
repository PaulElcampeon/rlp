import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function CategoryScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    getDataFromCache();
    return () => {
      // Cleanup code (optional), runs when the component unmounts or before running the effect again
    };
  }, []);

  const getDataFromCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@rlp');
      const retrievedData = jsonValue != null ? JSON.parse(jsonValue) : null;
      setData(retrievedData.data)
      console.log(retrievedData.data)
    } catch (e) {
      console.error('Failed to load data from AsyncStorage', e);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
      </ImageBackground>
      {data?.questions ? <FlatList
        data={Object.keys(data.questions).slice().sort()}
        renderItem={({ item }) => <CategoryCard category={item} questions={data.questions[item]} />}
        keyExtractor={(item) => item}
        numColumns={1}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatList}
      /> : null}
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    opacity: 0.5,
  },
  text: {
    color: '#fff',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  flatList: {
    width: '100%',
  }
});
