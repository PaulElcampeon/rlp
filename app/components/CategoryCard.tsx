import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { router } from 'expo-router';

const CategoryCard = ({ category }) => {
    return (
        <Card style={styles.card}>
          <Card.Title 
            title={category} 
            titleStyle={styles.title} 
          />
          <Card.Content style={styles.content}>
            <Text style={styles.text}>Explore {category} questions</Text>
          </Card.Content>
          <Card.Actions>
            <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => router.push(`/questions?category=${category}`)}>
                Select
              </Button>
            </View>
          </Card.Actions>
        </Card>
      );
    };

const styles = StyleSheet.create({
    card: {
      width: '43%',
        margin: 10,
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center', // Horizontally center the content
    },
    title: {
        textAlign: 'center', // Center the title text
    },
    content: {
        alignItems: 'center', // Center the content
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center', // Center the button within the container
        alignItems: 'center', // Center the button within the container
    },
    text: {
        color: '#888', // Light gray text color
        textAlign: 'center', // Center the title text
    },
});

export default CategoryCard;