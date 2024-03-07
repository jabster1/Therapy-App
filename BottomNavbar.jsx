// BottomNavbar.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeIcon = require('./images/icons/home.png');
const JournalIcon = require('./images/icons/journal.jpg');
const ResourcesIcon = require('./images/icons/resources.png');

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation(); //uses navigation library for tabs
  const route = useRoute();

  useEffect(() => {
    // Update activeTab based on the current route
    const routeName = route.name;
    setActiveTab(routeName || 'Home');
  }, [route]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // logic to handle tab changes, navigates to diff places
    if (tab === 'Resources') {
      //navigate to resources screen
      navigation.navigate('Resources')
    }
    if (tab === 'Journal') {
      navigation.navigate('Journal')
    }
    if (tab === 'Home') {
      navigation.navigate('Home')
    }

  };

  

  return (
    <View style={styles.bottomNavbar}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Home' && styles.activeTab]}
        onPress={() => handleTabClick('Home')}
      >
        <Image source={HomeIcon} style={styles.icon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Resources' && styles.activeTab]}
        onPress={() => handleTabClick('Resources')}
      >
        <Image source={ResourcesIcon} style={styles.icon} />
        <Text>Resources</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Journal' && styles.activeTab]}
        onPress={() => handleTabClick('Journal')}
      >
        <Image source={JournalIcon} style={styles.icon} />
        <Text>Journal</Text>
      </TouchableOpacity>
      {/* Add more TouchableOpacity buttons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center',
    backgroundColor: '#fff',
    //height: 1500,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15, //create some space between the tabs
  },
  icon: {
    width: 24, 
    height: 24, 
    marginBottom: 5, 
  },
  activeTab: {
    backgroundColor: '#C8A2C8',
  },
});

export default BottomNavbar;

