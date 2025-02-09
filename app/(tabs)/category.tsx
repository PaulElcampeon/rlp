import { View, StyleSheet, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { questions } from '../data/questions';

const categories = Object.keys(questions)

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item}
        numColumns={2} // Display items in a grid format with 2 columns
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
