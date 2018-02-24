import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { Stack, Scene, Router, Tabs, Modal, Actions, ActionConst } from 'react-native-router-flux';

// SCREENS
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {

  render(){

    var color = this.props.focused
            ? this.props.activeTintColor 
            : this.props.inactiveTintColor;

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Image 
          source={require('./img/TabBar-Routine.png')}
          style={{ tintColor:color}}
        />
      </View>
    );

  }

}

class TabIcon2 extends Component {

  render(){

    var color = this.props.focused
              ? this.props.activeTintColor 
              : this.props.inactiveTintColor;

    return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
          <Image 
            source={require('./img/tabbar-star.png')}
            style={{ tintColor:color}}
          />
        </View>
    );
  }

}


const RouterComponent = () => {

  return (

    <Router>
      <Tabs
        tabBarPosition='bottom'
        activeTintColor='#007AFF'
        inctiveTintColor='#000'
        showIcon = {true}
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
