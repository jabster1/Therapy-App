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

import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, Linking, TouchableOpacity, Button, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import BottomNavbar from './BottomNavbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';




const logo = require('./images/logo.png');
import teamMember1 from './images/home_page/team_1.png';
import teamMember2 from './images/home_page/team_2.png';
import teamMember3 from './images/home_page/team_3.png';
import teamMember4 from './images/home_page/team_4.png';
import krystal from './images/home_page/krystal.png';

const HomeScreen = () => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      
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
            <Image source={krystal} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberName}>Krystal Boza</Text>
              <Text style={styles.teamMemberDescription}>
                Specialties:
                {"\n"}
                <Text style={styles.bullet}>•</Text> Addiction
                {"\n"}
                <Text style={styles.bullet}>•</Text> Relationship Issues
              </Text>
            </View>
          </View>

          <View style={styles.teamRow}>
            <View style={styles.teamMember}>
              <Image source={teamMember1} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberName}>John Doe</Text>
              <Text style={styles.teamMemberDescription}>
                Specialties:
                {"\n"}
                <Text style={styles.bullet}>•</Text> Anxiety
                {"\n"}
                <Text style={styles.bullet}>•</Text> Depression
              </Text>           
            </View>
            <View style={styles.teamMember}>
              <Image source={teamMember2} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberName}>Loris McCorvey</Text>
              <Text style={styles.teamMemberDescription}>
                Specialties:
                {"\n"}
                <Text style={styles.bullet}>•</Text> Grief
                {"\n"}
                <Text style={styles.bullet}>•</Text> Trauma and PTSD
              </Text>
            </View>
          </View>

          <View style={styles.teamRow}>
            <View style={styles.teamMember}>
              <Image source={teamMember3} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberName}>Sage Bierster</Text>
              <Text style={styles.teamMemberDescription}>
                Specialties:
                {"\n"}
                <Text style={styles.bullet}>•</Text> Coping Skills
                {"\n"}
                <Text style={styles.bullet}>•</Text> Substance Use
              </Text>            
            </View>
            <View style={styles.teamMember}>
              <Image source={teamMember4} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberName}>Rebecca Johnson</Text>
              <Text style={styles.teamMemberDescription}>
                Specialties:
                {"\n"}
                <Text style={styles.bullet}>•</Text> Addiction
                {"\n"}
                <Text style={styles.bullet}>•</Text> Domestic Abuse
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}

              </Text>            
            </View>
          </View>

        </View>
      </View> 
    </ScrollView>

    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
  </View>
  
);


const openWebsite = () => {
  const url = 'https://mytherapyhour.clientsecure.me/';

  // Open the URL in the device's default browser
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred:', err));
};



const JournalScreen = () => {
  //this will have an initial value and the setInput is a function to update input Value
  const [inputValue, setInputValue] = useState('');
  const [headValue, setHeadValue] = useState('');
  const [data, setData] = useState(null);


  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleHeadChange = (text) => {
    setHeadValue(text);
  };

  const handleButtonPress = async() => {
    console.log('Input value:', inputValue);
    console.log('Head Value: ', headValue);
    // put headValue and inputValue into async storage it will store in a key-value pair
    //also need to convert to JSON
    //localStorage.setItem(headValue,inputValue)
    if (inputValue && headValue){
      // Example usage of AsyncStorage.setItem
      await AsyncStorage.setItem(headValue, inputValue);
      console.log('Data is saved')

      //clear values
      setInputValue('')
      setHeadValue('')
    }
  };

  //Method to grab all keys from the database and put to data value as a dictionary of key value pairs saved
  const loadFromStorage = async () => { 
    try {
      //const result = {};
      const keys = await AsyncStorage.getAllKeys();
      const result={};
      for (const key of keys) {
        const val = await AsyncStorage.getItem(key);
        result[key] = val;
      }
      setData(result);
    } catch (error) {
      console.log("error OCCURANCE", error);
      //return null
    }
  };

  // Function to clear all data from AsyncStorage
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared from AsyncStorage.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

// clear all the data in the async storage
//clearAllData();

const deleteItem = async (keyToDelete) => {
  try {
    await AsyncStorage.removeItem(keyToDelete);
    console.log(`Key '${keyToDelete}' deleted from AsyncStorage.`);
  } catch (error) {
    console.error('Error deleting key from AsyncStorage:', error);
  }
};

// in case I want to delete a key or entry
//deleteItem('key');
  
  useEffect(() => {
    loadFromStorage();
  }, []); // Run only once when component mounts

  //console.log('Rendered Data:', data);


  return(

    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>My Journal</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data && (
            <View>
              {Object.entries(data).map(([key, value]) => (
                <><View key={key} style={styles.item}>
                  <Text style={styles.key}>{key} {"\n"}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.value}>{value} </Text>
                  
                </View><View key={key} style={styles.journalDelContainer}>
                    <TouchableOpacity style={styles.journalDel} onPress={() => deleteItem(key)}>
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <Text>
                      {"\n"}
                      {"\n"}
                    </Text>  
                  </View></>
                
              ))}
            </View>
          )}
        </ScrollView>

        <TextInput
          value={headValue}
          onChangeText={handleHeadChange}
          placeholder="Enter Entry Title"
          style={styles.title_input}
        />
        <TextInput 
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Enter text..."
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>New Entry</Text>
          </TouchableOpacity>
          <Text>
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
          </Text>    
        </View>

      {/* Bottom Navbar */}
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
    </View>
  );
};






const ResourcesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  //const [selectedDocument, setSelectedDocument] = useState(null);

  // will open document in a popup
  const openDocument = () => {
    setModalVisible(true);
  };

  // will close popup
  const closeModal = () => {
    setModalVisible(false);
  };

  //const doc1 = require('./docs/doc1.pdf');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Important Links {"\n"} {"\n"}</Text>
      <View style={styles.linkRow}>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://example.com')}>
          <Text style={styles.linkText}>Link 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://example.com')}>
          <Text style={styles.linkText}>Link 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkRow}>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://example.com')}>
          <Text style={styles.linkText}>Link 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://example.com')}>
          <Text style={styles.linkText}>Link 4</Text>
        </TouchableOpacity>
      </View>

      <Text>
        {"\n"} {"\n"}
      </Text>
      
      
      <Text style={[styles.header, styles.marginTop]}>Documents {"\n"} {"\n"}</Text>
      <View style={styles.documentRow}>
        <TouchableOpacity style={styles.documentButton} onPress={openDocument}>
          <Text style={styles.buttonText}>Doc 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.documentButton} onPress={openDocument}>
          <Text style={styles.buttonText}>Doc 2</Text>
        </TouchableOpacity>
      </View>s




      {/* Modal for displaying documents */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Document Content Here</Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><BottomNavbar /></View>
    </View>
  );
};



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

//-------CSS STYLING ----------------------------------------------------------------------------
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
    height: 20,
  },
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
  bullet: {
    fontWeight: 'bold',
    color: '#C8A2C8',
    marginRight: 5,
  },

  //jounal section -----------------------------------------------
  journalContainer: {
    flex: 1,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title_input: {
    height: 20,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', //align horizontally
    marginVertical: 5,
  },
  key: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 24,
  },
  value: {
    marginLeft: 5,
    fontSize: 16,
  },
  journalDel: {
    backgroundColor: '#C8A2C8',
    width: 100, // Set a fixed width and height as it was taking up the whole page
    height: 50, 
    borderRadius: 35, // Make it circular
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center',
  },
  journalDelContainer: {
    justifyContent: 'center',
  },
  //k
  //Resources section
  document: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#C8A2C8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, 
  },
  linkButton: {
    backgroundColor: '#C8A2C8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '45%', // Adjust width to fit two buttons in a row
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center', 
  },
  documentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Adjust vertical spacing between rows
  },
  documentButton: {
    backgroundColor: '#C8A2C8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '45%', // Adjust width to fit two buttons in a row
  },
  documentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center', // Center text horizontally within button
  },
});

export default App;

