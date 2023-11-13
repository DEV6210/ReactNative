import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';

function HomeScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={true}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'row'

  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    padding: 5,
    height: 100,
    width: 100,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },


});
export default HomeScreen;