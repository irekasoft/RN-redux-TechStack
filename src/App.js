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
  
    tabBarIcon: () => (
      <Image 
          style = {{  }}
          source={ require('./img/TabBar-Routine.png')  }
        />
    ),
    
  },
  
  Profile: {
    screen: ProfileScreen,
    tabBarIcon: ({ tintColor, focused }) => (
      <Image 
          style = {{  }}
          source={ require('./img/TabBar-Routine.png')  }
        />
    ),
  },

  
  
});


export default App;