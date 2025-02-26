import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';

type CategoryCardInfo = {
  category: string;
  questions: []
}

const icons = {
  'finances': require('../../assets/images/icons/budget.png'),
  'religion': require('../../assets/images/icons/church.png'),
  'expectations': require('../../assets/images/icons/expectation.png'),
  'intimacy': require('../../assets/images/icons/monogamy.png'),
  'communication': require('../../assets/images/icons/conversation.png'),
  'marriage': require('../../assets/images/icons/wedding.png'),
  'family': require('../../assets/images/icons/family.png'),
  'work life balance': require('../../assets/images/icons/working.png'),
  'health': require('../../assets/images/icons/healthcare.png'),
  'divorce': require('../../assets/images/icons/divorce.png'),
  'kids': require('../../assets/images/icons/playtime.png'),
  'non categorized': require('../../assets/images/icons/question-mark.png'),
  'porn': require('../../assets/images/icons/erotic.png'),
  'where to live': require('../../assets/images/icons/map.png'),
}

const CategoryCard: React.FC<CategoryCardInfo> = ({ category, questions }) => {
  const imageSource = icons[category.toLowerCase()] //|| require('../../assets/icons/budget.png'); // Fallback to a default image if the category is not found

  console.log(questions)
  return (
    <Pressable style={styles.card} onPress={() => router.push({
      pathname: '/questions',
      params: { category }
    })}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{category.toUpperCase()}</Text>
        <Text style={styles.questionInfo}>Count: {questions.length}</Text>
      </View>
      <Image source={imageSource} style={{ width: 50, height: 50 }} />
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
    letterSpacing: 2,
    fontFamily: 'Quantico-Regular',

  },
  questionInfo: {
    textAlign: 'left',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Quantico-Regular',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
});

export default CategoryCard;