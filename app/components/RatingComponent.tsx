import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handlePress = (index: number) => {
    setRating(index + 1);
    console.log(`Star position: ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <MaterialIcons
            name={index < rating ? 'star' : 'star-border'}
            size={32}
            color={index < rating ? '#FFD700' : '#000'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },
});

export default RatingComponent;