import React, { Components } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image } from 'react-native';

// OWN STUFF
import { Header } from '../components/common';

const ProfileScreen = () => {
  return (

      <SafeAreaView style={{ flex: 1 }}>
      
        <Header>Profile</Header>
        <Image 
          style = {{ alignSelf:'auto', }}
          source={ require('../img/TabBar-Routine.png')  }
        />
        
      </SafeAreaView>


  );
};

export default ProfileScreen;
