import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/QuestionCard';
import data from './data/questions.json';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuestionCard = () => {
  const route = useRoute(); // Get route params
  const navigation = useNavigation();
  const category = route.params?.category || '';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {data.questions[category].map((question, index) =>
        <Card
          key={index}
          position={index}
          category={category}
          question={question}
          zIndex={data.questions[category].length - index}/>
      )}
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