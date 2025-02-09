import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder } from 'react-native';
import { questions } from '../data/questions';
import RatingComponent from './RatingComponent';

interface SwipeableCardProps {
    category: string;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ category }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    console.log(indexRef.current)

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (e, gestureState) => {
                console.log(gestureState)
                if (Math.abs(gestureState.dx) > 120) {
                    const direction = gestureState.dx > 0 ? 'right' : 'left';
                    Animated.timing(pan, {
                        toValue: { x: gestureState.dx > 0 ? 500 : -500, y: 0 },
                        duration: 200,
                        useNativeDriver: false,
                    }).start(() => {
                        pan.setValue({ x: 0, y: 0 });
                        if (direction === 'right' && indexRef.current > 0) {
                            setIndex(prevIndex => prevIndex - 1);
                        } else if (direction === 'left' && indexRef.current < questions[category].length - 1) {
                            console.log('swiped left')
                            setIndex(prevIndex => prevIndex + 1);
                        }
                    });
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.card, { transform: pan.getTranslateTransform() }]}
        >
            <View style={styles.textContainer}>
                <Text style={styles.text}>{questions[category][index].text}</Text>
            </View>
            <View style={styles.ratingComponentContainer}>
                <RatingComponent />
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 0.7,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal:10
    },
    textContainer: {
        flex: 5,
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ratingComponentContainer: {
        flex: 1,
        width: '100%'
    }
});

export default SwipeableCard;