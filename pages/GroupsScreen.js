// Import necessary React and React Native components
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

// Create a functional component for the page
const GroupsScreen = () => {
  return (
    // Use the View component as a container
    <View style={styles.container}>
      {/* Display a text element */}
      <Text style={styles.text}>Penis</Text>
    </View>
  );
};

// Create a stylesheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex property allows the container to expand to fill the available space
    justifyContent: 'center', // Align content vertically at the center
    alignItems: 'center', // Align content horizontally at the center
  },
  text: {
    fontSize: 20, // Set font size to 20
    fontWeight: 'bold', // Set font weight to bold
  },
});

// Export the component for use in other parts of the application
export default GroupsScreen;
