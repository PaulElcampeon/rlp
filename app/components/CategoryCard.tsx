import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { router } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type CategoryCardInfo = {
  category: string;
  questions: []
}

const CategoryCard: React.FC<CategoryCardInfo> = ({ category, questions }) => {
  return (
    <Pressable style={styles.card} onPress={() => router.push({
      pathname: '/questions',
      params: { category }
    })}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{category.toUpperCase()}</Text>
        <Text style={styles.questionInfo}>Count: {questions.length}</Text>
      </View>
      <FontAwesome5 name='arrow-right' size={50} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    paddingHorizontal: 30,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.75, 
    borderWidth: 2, 
    borderColor: 'white',
    borderRadius: 8,      
  },
  infoContainer: {
    flex: 1
  },
  title: {
    textAlign: 'left', 
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold'
  },
  questionInfo: {
    textAlign: 'left', 
    color: 'white',
    fontSize: 15, 
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
});

export default CategoryCard;