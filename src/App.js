import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { Header } from './components/common';

import LibraryList from './components/LibraryList';

// REDUX STUFF
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';



const App = () => {

  return (
    <Provider store={createStore(reducers)} >

      {/* // one for JSX, one for JS object */}
      <SafeAreaView style={{ flex: 1 }}>
      
        <Header>TechStack</Header>
        <LibraryList/>
        
      </SafeAreaView>

    </Provider>    
  );
};


export default App;