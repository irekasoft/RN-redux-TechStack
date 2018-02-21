import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';


import { Header } from './components/common';
import { TabNavigator } from 'react-navigation';
import LibraryList from './components/LibraryList';

// REDUX STUFF
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// SCREENS 
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = TabNavigator({
  
  Home: {
    screen: HomeScreen,
    tabBarLabel: 'Hi',
    tabBarIcon: ({tintColor}) => (
      <Image 
          style  = {{ width:27, height:23, tintColor:'white' }}
          source = {require('./img/TabBar-Routine.png')}
        >Hello</Image>
    ),
    
  },
  
  Profile: {
    screen: ProfileScreen,
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon.Button name="app-store" backgroundColor="#3b5998" />
    ),
  },
   
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'grey',
    activeBackgroundColor: 'black',
    inactiveBackgroundColor: 'black',
  }
}

);


export default App;