// import libs for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = ( { children } ) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ children }</Text>
        </View>

    );
};

const styles = {

    viewStyle: {

        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingTop: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        position: 'relative',


    },

    textStyle: {
        fontSize: 24,
        fontWeight: '600'

    }

};


// make the component available to other parts of the app
export { Header };
