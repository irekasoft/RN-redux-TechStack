import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../actions'; 

// MY COMPONENTS
import { CardSection } from './common';

class ListItem extends Component {
  renderDescription(){
    // Some sort of declaration of props here.
    const { library, selectedLibraryId, expanded } = this.props;

    if (expanded == true) {
      return(
        <Text> - {library.description}</Text>
      );
    }
  }

  cellOnSelected(){
    console.log("cell on selected");
  }

  // ??: Is after call selectLibrary(id), the render called automatically?
  render () {

    // deconstructing
    const { id, title } = this.props.library;

    return(
      // touchable without feedback was not working
      <TouchableOpacity
        // select library from actions
        onPress={ ()=> this.props.selectLibrary(id) }
        // onPress={ ()=> this.cellOnSelected() }
      >
        <CardSection>
          <Text style={styles.title}>
           {title}{this.renderDescription()}
          </Text> 
        </CardSection>
      </TouchableOpacity>

    );
  }

}

const styles = {

  title: {
    fontSize: 18,
    paddingLeft: 15,
    
  }

}

// no logic in my component
// use ownProps 
const mapStateToProps = (state, ownProps) => {
  
  var expanded = false;
  
  if (state.selectedLibraryId === ownProps.library.id){
    expanded = true;
  }

  return { expanded }

};

// @1.. argument mapStateToProps.. or null, then actions
// @2.. action object
export default connect(mapStateToProps, actions)(ListItem);