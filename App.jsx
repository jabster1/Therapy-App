import { StatusBar } from 'expo-status-bar';
// App.jsx
//colorssss
//A6C681 - light green
//729B79 - darkish green
//FAF6F1 - off white
//1E5044 - very dark forest green
//FFDB61 - Yellow calm
//#C8A2C8 - Lavender light purple
//#9C89B8 - soft purple

import React from 'react';
import { View, Text, Linking, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import BottomNavbar from './BottomNavbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const logo = require('./images/logo.png');
import teamMember1 from './images/home_page/team_1.png';
import teamMember2 from './images/home_page/team_2.png';
import teamMember3 from './images/home_page/team_3.png';
import teamMember4 from './images/home_page/team_4.png';

const HomeScreen = () => (
  <View style={styles.container}>
    

    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Welcome to Therapy Hour</Text>
      
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.teamMembersContainer}>
      <Text style={styles.teamHeader}>Our Team</Text>
      <View style={styles.teamMembers}>

        <View style={styles.teamRow}>
          <View style={styles.teamMember}>
            <Image source={teamMember1} style={styles.teamMemberImage} />
            <Text style={styles.teamMemberName}>John Doe</Text>
            <Text style={styles.teamMemberDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
          <View style={styles.teamMember}>
            <Image source={teamMember2} style={styles.teamMemberImage} />
            <Text style={styles.teamMemberName}>Loris McCorvey</Text>
            <Text style={styles.teamMemberDescription}>
              Top Specialities
            </Text>
          </View>
        </View>

        <View style={styles.teamRow}>
          <View style={styles.teamMember}>
            <Image source={teamMember3} style={styles.teamMemberImage} />
            <Text style={styles.teamMemberName}>Sage Bierster</Text>
            <Text style={styles.teamMemberDescription}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
          <View style={styles.teamMember}>
            <Image source={teamMember4} style={styles.teamMemberImage} />
            <Text style={styles.teamMemberName}>Rebecca Johnson</Text>
            <Text style={styles.teamMemberDescription}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </View>

      </View>
    </View>
    
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
  
  </View>
  
);


const openWebsite = () => {
  const url = 'https://mytherapyhour.clientsecure.me/';

  // Open the URL in the device's default browser
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred:', err));
};

const JournalScreen = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>My Journal</Text>
    </View>
    
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
  </View>
);


const ResourcesScreen = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Resources</Text>
    </View>
    
    
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
  </View>
);

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', //puts content at top of page
    padding: 20,
    backgroundColor: "#EAEDED",
  },
  headerContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Align items vertically
    marginBottom: 50,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C89B8', // Adjust the color as needed
  },
  buttonContainer: {
    marginTop: 20, //space between header and button
  },
  button: {
    backgroundColor: '#C8A2C8',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  teamMembersContainer: {
    marginTop: 40,
  },
  teamHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9C89B8',
    marginBottom: 10,
  },
  teamMembers: {
    flexDirection: 'column', // Align items vertically
    alignItems: 'center', // align horizantally
  },
  teamRow: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Distribute items evenly along the row
    marginBottom: 20, // Add margin between rows
  },
  teamMember: {
    alignItems: 'center',
    flex: 1, //each member takes up equal space in the row
  },
  teamMemberImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image circular
  },
  teamMemberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  teamMemberDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    width: 120,
  },
});

export default App;

