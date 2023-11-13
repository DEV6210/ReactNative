import React from 'react';
import type { PropsWithChildren } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import SecondScreen from './src/components/SecondScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  StatusBar.setBackgroundColor('#001B79')
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '&', // Screen title
            headerStyle: {
              backgroundColor: 'white', // Header background color
            },
            headerTintColor: 'white', // Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center', // Title alignment
            headerBackTitle: 'Back', // Text displayed when navigating back
            headerBackTitleVisible: true, // Show or hide back button text
            headerLeft: () => (
              <Image
                source={require('./assets/images/and1.gif')}
                style={{ width: 40, height: 40, borderRadius: 100, marginRight: 10 }}
              />

            ),
            headerRight: () => (
              <TouchableOpacity >
                <Image
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/91625966?v=4',
                  }}
                  style={{ width: 40, height: 40, borderRadius: 100, marginRight: 10 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen name="Profile" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
