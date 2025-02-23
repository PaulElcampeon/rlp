import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RatingComponent = ({ratingValue, category, position, isFlipped}) => {
  const [rating, setRating] = useState(ratingValue);

  const handlePress = (index: number) => {
    if (!isFlipped) return;
    console.log('Rating:', index + 1);
    console.log('Category:', category);
    console.log('Question No:', position);

    if (rating === index + 1) {
      setRating(0);
    } else {
      setRating(index + 1);
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <MaterialIcons
            name={index < rating ? 'star' : 'star-border'}
            size={32}
            color={index < rating ? '#FFD700' : 'white'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    position: 'absolute',
    bottom: 40,
    padding: 10,
  },
});

export default RatingComponent;