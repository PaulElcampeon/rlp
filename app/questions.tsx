import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import SwipeableCard from '../app/components/QuestionCard';

export default function QuestionsScreen() {
  const { category } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <SwipeableCard category={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
});
