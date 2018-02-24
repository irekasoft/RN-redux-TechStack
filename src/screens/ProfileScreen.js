import React, { Components } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image } from 'react-native';

// OWN STUFF
import { Header } from '../components/common';

const ProfileScreen = () => {
  return (

      <SafeAreaView style={{ flex: 1 }}>

        <Image 
          style= {{ width:'100%', height: 100, marginTop: 30, tintColor:'#030303' }}
          source={require('../img/TabBar-Routine.png')}
          
          resizeMode = 'contain'
        />


      </SafeAreaView>


  );
};

export default ProfileScreen;
