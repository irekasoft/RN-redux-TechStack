import React, { Components } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';

// REDUX STUFF
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// OWN STUFF
import { Header } from '../components/common';
import reducers from '../reducers'
import LibraryList from '../components/LibraryList';

// const HomeScreen = () => {
//   return (

//     <View>
//       <Text>Hello</Text>
//     </View>

//   );
// };


const HomeScreen = () => {

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

export default HomeScreen;
