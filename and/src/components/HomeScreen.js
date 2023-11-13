import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import { getPosts } from '../services/api';

function HomeScreen({ navigation }) {
  const goToNextScreen = () => {
    navigation.navigate('Profile');
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Fetch new data or update existing data here
    setPosts(Array.from({ length: 5 }, () => getRandomPost()));
    setRefreshing(false);
  };

  const postImages = [
    'https://images.pexels.com/photos/18885164/pexels-photo-18885164/free-photo-of-wedding-couple-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18994151/pexels-photo-18994151/free-photo-of-sunflower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/18945830/pexels-photo-18945830/free-photo-of-view-of-a-forest-mountains-and-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/19049975/pexels-photo-19049975/free-photo-of-black-and-white-photo-of-a-man-surfing-on-a-big-wave.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/18867786/pexels-photo-18867786/free-photo-of-model-in-sepia-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/19003192/pexels-photo-19003192/free-photo-of-a-man-with-an-umbrella-walks-across-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/18783585/pexels-photo-18783585/free-photo-of-a-loaf-of-bread-with-a-christmas-decoration-on-it.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/18634040/pexels-photo-18634040/free-photo-of-homemade-apple-pie-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    'https://images.pexels.com/photos/7121493/pexels-photo-7121493.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7685848/pexels-photo-7685848.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8819156/pexels-photo-8819156.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6571000/pexels-photo-6571000.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12883428/pexels-photo-12883428.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2780309/pexels-photo-2780309.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  const getRandomUsername = () => {
    const usernames = [
      "Quantum Jaguar",
      "Electric Sphinx",
      "Lunar Phoenix",
      "Nebula Wanderer",
      "Crimson Penguin",
      "Mystic Hawk",
      "Celestial Fox",
      "Galactic Whisper",
      "Sapphire Dragon",
      "Echo Knight",
      "Solar Gazelle",
      "Velvet Vortex",
      "Nova Spectre",
      "Frosty Zephyr",
      "Ember Wraith"
    ];
    const randomIndex = Math.floor(Math.random() * usernames.length);
    return usernames[randomIndex];
  };

  const getRandomPost = () => {
    const randomPostImage = postImages[Math.floor(Math.random() * postImages.length)];
    return {
      username: getRandomUsername(),
      userImage: '', // Example placeholder image URL
      postImage: randomPostImage,
    };
  };

  const [posts, setPosts] = useState(Array.from({ length: 5 }, () => getRandomPost()));

  // Function to generate a random time in hours, minutes, and seconds format
  const generateRandomTime = () => {
    // Generate random values for hours, minutes, and seconds
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);

    // Format the values into a string
    const formattedTime = `${minutes}m`;

    return formattedTime;
  };

  // Example usage
  const randomTime = generateRandomTime();

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
        >
          {
            posts.map((item, index) => {
              return (
                <View>
                  <View style={styles.card}>

                    <Image
                      source={{ uri: item.postImage }}
                      width='100%' height={100}
                      style={{ borderRadius: 10 }}
                    />
                    <Text style={styles.onlineUser}>{item.username.split(' ')[0]}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>

        <View>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.postContainer}>
                <View style={styles.posthead}>
                  <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg' }} style={styles.userImage} />
                  <View>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.date}>{randomTime} Ago</Text>
                  </View>
                </View>

                <Image source={{ uri: item.postImage }} style={styles.postImage} />
               
              </View>
            )}
          />

        </View>
      </ScrollView>
    </SafeAreaView >
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
  // post card
  postContainer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
  },
  postImage: {
    width: '100%',
    height: 500,
  },
  postCard: {
    backgroundColor: 'white',
    marginBottom: 10,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 100
  },

  posthead: {
    // margin: 5,
    flexDirection: 'row',
    padding: 5
  },
  username: {
    marginLeft: 10,
    marginTop: 0,
    fontSize: 18,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '800', // Corrected to a string
  },
  date: {
    marginLeft: 10,
    marginTop: -2
  },
  //buttonGroup
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    margin: 5
  }
  ,
  //onlineUser
  onlineUser: {
    color: 'white',
    position: 'absolute',
    zIndex: 999,
    marginLeft: 10,
    bottom: 0,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '800', // Corrected to a string
  }
});
export default HomeScreen;