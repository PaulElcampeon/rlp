import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './components/QuestionCard1';
import { questions } from '../app/data/questions';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuestionCard = () => {
  const [isPressable, setIsPressable] = useState(true);
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
      {questions[category].questions.map((question, index) =>
        <Card
          key={index}
          position={index}
          category={category}
          question={question}
          zIndex={questions[category].questions.length - index}
          isPressable={isPressable}
          setIsPressable={setIsPressable}
          top={index > 5 ? '4%' : (7 - index).toString() + '%'} />
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