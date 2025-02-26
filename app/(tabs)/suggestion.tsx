import { Text, View, StyleSheet, ImageBackground, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useState } from 'react';

export default function Suggestion() {
  const [text, setText] = useState<string>('');

  const postData = async () => {
    try {
      const response = await fetch('https://relationship-love-probe.co.uk/api/v1/questions/suggest', {
      // const response = await fetch('http://localhost:8080/api/v1/questions/suggest', {
        method: 'POST',  // Set the HTTP method
        headers: {
          'Content-Type': 'application/json',  // Set the content type to JSON
        },
        body: JSON.stringify({
          text: text,
        })
      });
  
      const status = await response.status;
      if (status === 200) {
        showSuccessAlert;
      }  // Do something with the response data
    } catch (error) {
      console.error('Error:', error);  // Handle errors
    }
  };
  
  const handleSubmit = () => {
    if (isValidString(text)) {
      postData();
    }
  }

  function isValidString(str: string | undefined): boolean {
    return str !== undefined && str !== null && str.length >= 10;
  }

  const showSuccessAlert = () => {
    Alert.alert(
      "Success", // Title of the alert
      "Your request was successful!", // Message to display
      [
        {
          text: "OK", // Button text
          onPress: () => console.log("OK Pressed") // Action when button is pressed
        }
      ],
      { cancelable: false } // Makes the alert non-dismissible by tapping outside
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/rlp-logo-1.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
      </ImageBackground>
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestionTitle}>Please add your question suggestion here</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="suggestion"
          />
          <Button mode="contained" style={styles.startButton} labelStyle={styles.startButtonText} onPressOut={handleSubmit}>
            SUBMIT
          </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    opacity: 0.5
  },
  suggestionContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.7,
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%',
    height: 300,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  suggestionTitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Quantico-Regular',

  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
  },
  startButton: {
    borderColor: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 40,
    borderRadius: 100,
    width: 120
  },
  startButtonText: {
    fontSize: 11,
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'Quantico-Regular',
  }
});