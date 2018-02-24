import React from 'react';
import { View } from 'react-native';


const Card = (props) => {

  return (
    
    <View style={styles.containerStyle}>
      {props.children}
    </View>

  );

};

const styles = {

  containerStyle: {
    borderWidth:0,
    borderRadius:10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }

};


export { Card };