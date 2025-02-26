import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Animated, Platform, ImageBackground } from 'react-native';
import ShareComponent from './ShareComponent';
import RatingComponent from './RatingComponent';
import { usePreventScreenCapture } from 'expo-screen-capture';

const Card = ({ category, question, zIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const translateXAnimation = useRef(new Animated.Value(0)).current;
  const translateYAnimation = useRef(new Animated.Value(0)).current;
  if (Platform.OS !== 'web') {
    usePreventScreenCapture();
  }

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipToFrontStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const flipToBackStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const scaleStyle = {
    transform: [
      { scale: scaleAnimation },
      { translateX: translateXAnimation },
      { translateY: translateYAnimation },
    ],
  };

  const flipAnimationSpringPropsBackToOriginalPosition = () => {
    return flipAnimationSpringProps(0);

  }

  const flipAnimationSpringPropsToRevealQuestion = () => {
    return flipAnimationSpringProps(180);
  }

  const flipAnimationSpringProps = (flipToValue) => {
    return {
      toValue: flipToValue,
      friction: 8,
      tension: 10,
      useNativeDriver: false,
    }
  }

  const scaleAnimationTimingPropsBackToOriginalScale = {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }

  const translateAnimationTimingPropsBackToOriginalPosition = {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }

  const isQuestionShowing = () => { return isFlipped };

  const isQuestionTuckedAway = () => { return isScaled };

  const scaleDownAndMoveToBottomLeftAndFlipCardBackToFront = () => {
    // Scale down, move to bottom left, and flip back to front
    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 1 / 3,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnimation, {
        toValue: -width * 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: height * 1.1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(flipAnimation, flipAnimationSpringPropsBackToOriginalPosition()),
    ])
      .start(() => {
        setIsScaled(true);
        setIsFlipped(false);
      });
  }

  const scaleBackUpToOriginalSizeAndMoveBackToOriginalPosition = () => {
    // Scale back up to original size and move back to original position
    Animated.parallel([
      Animated.timing(scaleAnimation, scaleAnimationTimingPropsBackToOriginalScale),
      Animated.timing(translateXAnimation, translateAnimationTimingPropsBackToOriginalPosition),
      Animated.timing(translateYAnimation, translateAnimationTimingPropsBackToOriginalPosition),
      Animated.spring(flipAnimation, flipAnimationSpringPropsBackToOriginalPosition()),
    ])
      .start(() => {
        setIsScaled(false);
      });
  }

  const flipCardToRevealQuestion = () => {
    Animated.spring(flipAnimation, flipAnimationSpringPropsToRevealQuestion())
      .start(() => {
        setIsFlipped(true);
      });
  }

  const handleCardPress = () => {
    if (isQuestionShowing() && !isQuestionTuckedAway()) {
      scaleDownAndMoveToBottomLeftAndFlipCardBackToFront();
      return;
    }

    if (!isQuestionShowing() && isQuestionTuckedAway()) {
      scaleBackUpToOriginalSizeAndMoveBackToOriginalPosition();
      return;
    }

    if (!isQuestionShowing() && !isQuestionTuckedAway()) {
      flipCardToRevealQuestion();
    }
  }

  return (
    <Animated.View style={[styles.pressable, scaleStyle, { zIndex: isScaled ? 1000 : zIndex }]}>
      <Pressable onPress={handleCardPress} style={styles.pressable}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.card, styles.cardFront, flipToFrontStyle]}>
            <ImageBackground
              source={require('../../assets/images/rlp-logo-1.png')}
              style={styles.imageBackgroundBackCard}
            >
            </ImageBackground>
            <Text style={styles.flipText}>CLICK</Text>
          </Animated.View>
          <Animated.View style={[styles.card, styles.cardBack, flipToBackStyle]}>
            <ImageBackground
              source={require('../../assets/images/rlp-logo-1.png')}
              style={styles.imageBackgroundFrontCard}
            >
            </ImageBackground>
            <Text style={styles.categoryText}>{category.toUpperCase()}</Text>
            <Text style={styles.text}>{question.text}</Text>
            <ShareComponent message={`Check out this question from the ${category} category: https://example.com/category/${category}/${question.id}`} />
            <RatingComponent ratingValue={question.rating} category={category} id={question.id} isFlipped={isFlipped} />
          </Animated.View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute',
    top: '10%',
    width: width * 0.7,
    height: height * 0.6,
  },
  imageBackgroundBackCard: {
    position: 'absolute',
    top: '30%',
    width: 150,
    height: 150,
  },
  categoryText: {
    position: 'absolute',
    top: '10%',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Quantico-Regular',
    letterSpacing: 10
  },
  flipText: {
    position: 'absolute',
    top: '75%',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Quantico-Regular',
    letterSpacing: 10
  },
  imageBackgroundFrontCard: {
    position: 'absolute',
    top: '30%',
    width: 150,
    height: 150,
    opacity: 0.3,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
  },
  cardFront: {
  },
  cardBack: {
    transform: [{ rotateY: '180deg' }], // Ensure the back side is rotated
  },
  text: {
    width: '90%',
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'Quantico-Regular',
  },
});

export default Card;