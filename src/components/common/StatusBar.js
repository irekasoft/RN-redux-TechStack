import React from 'react';
import { Text, View } from 'react-native';

// make a component
const StatusBar = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
        </View>

    );
};

const styles = {

  viewStyle: {

      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
      paddingTop: 0,

      position: 'relative'


  },


};

export { StatusBar };