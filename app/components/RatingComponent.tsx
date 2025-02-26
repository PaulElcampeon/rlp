import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Rating = {
  BAD: 1,
  OK: 2,
  GOOD: 3,
  VERY_GOOD: 4,
  EXCELLENT: 5
};

const RatingComponent = ({ratingValue, category, id, isFlipped}) => {
  const [rating, setRating] = useState(ratingValue);

  const postData = async (rating: number) => {
    try {
      // const response = await fetch('https://relationship-love-probe.co.uk/api/v1/ratings/rate', {
      const response = await fetch('http://localhost:8080/api/v1/ratings/rate', {
        method: 'POST',  // Set the HTTP method
        headers: {
          'Content-Type': 'application/json',  // Set the content type to JSON
        },
        body: JSON.stringify({
          questionId: id,
          ratingCategory: mapNumberToRating(rating)
        })
      });
  
      const status = await response.status;
      console.log(status)
      // if (status === 200) {
      //   // showSuccessAlert;
      // }  // Do something with the response data
    } catch (error) {
      console.error('Error:', error);  // Handle errors
    }
  };

  const mapNumberToRating = (number) => {
    if (number < 1 || number > 5 || !Number.isInteger(number)) {
      throw new Error("Number must be between 1 and 5");
    }
  
    // Find the rating by the number
    return Object.keys(Rating).find(key => Rating[key] === number);
  }

  const handlePress = (index: number) => {
    if (!isFlipped) return;
    console.log('Rating:', index + 1);
    console.log('Category:', category);
    console.log('Question No:', id);

    if (rating === index + 1) {
      setRating(0);
    } else {
      setRating(index + 1);
      postData(index + 1)
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