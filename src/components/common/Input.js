import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText,placeholder,secureTextEntry }) => {

  return (

    <View style = { styles.containerStyle }>
      <Text style = { styles.labelStyle }>{ label }</Text>
      <TextInput
        value = {value}
        onChangeText = { onChangeText }
        style = { styles.textInputStyle }
        placeholder = {placeholder}
        autoCorrect = {false}
        autoCapitalize = 'none'
        secureTextEntry={secureTextEntry}
      />
    </View>

  );

};

const styles = {

  containerStyle: {

    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1,
    textAlign: 'right',
  },

  textInputStyle: {
    color: '#000', 
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 18,
    height: 40,
    flex: 3,
    borderRadius: 5, 
    backgroundColor: '#f8f8f8',
    
  },

};

export { Input };