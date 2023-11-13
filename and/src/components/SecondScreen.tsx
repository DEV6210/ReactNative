import React from 'react';
import { View, Text, Button } from 'react-native';

function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>This is the Second Screen! h</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


export default SecondScreen;
