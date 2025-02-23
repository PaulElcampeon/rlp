import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import data from '../data/questions.json';

const categories = Object.keys(data.questions)

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      >
      </ImageBackground>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} questions={data.questions[item]} />}
        keyExtractor={(item) => item}
        numColumns={1}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  flatList: {
    width: '100%',
  },
  imageBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 200,
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
});
