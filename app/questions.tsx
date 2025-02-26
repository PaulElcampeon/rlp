import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/QuestionCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuestionCard = () => {
  const route = useRoute(); // Get route params
  const navigation = useNavigation();
  const category = route.params?.category || '';
  const [data, setData] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    });
  }, [navigation]);

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
      {data?.questions ?
        data.questions[category].map((question, index) =>
          <Card
            key={index}
            category={category}
            question={question}
            zIndex={data.questions[category].length - index} />
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default QuestionCard;