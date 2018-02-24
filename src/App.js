import React, {Component} from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { Header } from './components/common';

// Router
import Router from './Router';

import LibraryList from './components/LibraryList';

// REDUX STUFF
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// SCREENS 
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

class App extends Component {

  render() {
    return (
      <Router />      
    );
  };

}

export default App;