import React from 'react';
import { Pressable, StyleSheet, Share, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShareComponent = ({ message }) => {
  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
        Alert.alert(error.message);
    }
  };

  return (
    <Pressable onPress={handleSharePress} style={styles.shareButton}>
      <Ionicons name="share-social" size={20} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shareButton: {
    position: 'absolute',
    top: '3%',
    right: '6%',
    backgroundColor: 'black',
  },
});

export default ShareComponent;