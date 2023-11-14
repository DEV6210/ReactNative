import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Animated, Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import SecondScreen from './src/components/SecondScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './src/components/SettingScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import LoginScreen from './src/components/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Screen = {
  Home: 'Home',
  Profile: 'Profile',
  Login: 'Login'
};





function App(): JSX.Element {
  StatusBar.setBackgroundColor('#001B79');

  const AfterLogin = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarBadgeStyle: { backgroundColor: 'red' }, // Badge style
        tabBarStyle: { backgroundColor: 'white' }, // Style for the tab bar
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Style for the tab label
        tabBarIconStyle: { marginBottom: -3 }, // Style for the tab icon
        headerShown: false,


        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Second') {
            iconName = 'appstore-o';
          }

          // You can return any component here that you like.
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <StatusBar />

      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== Screen.Login,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        })}
        initialRouteName={isLoggedIn ? "Home" : "Login"}
      >
        <Stack.Screen
          name={Screen.Login}
          component={LoginScreen}
        />


        <Stack.Screen
          name={Screen.Home}
          component={AfterLogin}
          options={{
            title: '&', // Screen title
            headerStyle: {
              backgroundColor: 'white', // Header background color
            },
            headerTintColor: 'blue', // Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'red',        // Set title color to red
              fontSize: 35,        // Set title font size to 20
            },
            headerTitleAlign: 'center', // Title alignment
            headerBackTitle: 'Back', // Text displayed when navigating back
            headerBackTitleVisible: true, // Show or hide back button text
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
