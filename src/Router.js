import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { Stack, Scene, Router, Tabs, Modal, Actions, ActionConst } from 'react-native-router-flux';

// SCREENS
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

//Create a dedicated class that will manage the tabBar icon
const TabIcon = () => {

  return (
    <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
      <Image 
        source={require('./img/TabBar-Routine.png')}
        style={{ tintColor:'#8E8E93'}}
      />
    </View>
  );

}

const TabIcon2 = () => {

  return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Image 
          source={require('./img/tabbar-star.png')}
          style={{ tintColor:'#8E8E93'}}
        />
      </View>
  );
  
}

const RouterComponent = () => {

  return (

    <Router>
      <Tabs
        tabBarPosition='bottom'
        activeTintColor='#007AFF'
        inctiveTintColor='#000'
        showIcon = 'true'
        swipeEnabled = {false}
        animationEnabled = {false}
      >

        <Scene 
            key = "home" 
            component = {HomeScreen} 
            title = "Home"
            icon = {TabIcon}
          />
       

       <Scene 
            key = "profile" 
            component = {ProfileScreen} 
            title = "Profile"
            icon = {TabIcon2}
        />
      
      </Tabs>
    </Router>
  );

};

export default RouterComponent;
