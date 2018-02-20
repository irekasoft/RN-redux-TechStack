import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// redux
import {  connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

  renderDescription(){

    const { library, selectedLibraryId } = this.props;

    if (this.props.library.id === this.props.selectedLibraryId) {

      return(
        <Text>{this.props.library.description}</Text>
      );

    }

  }

  cellOnSelected(){
    console.log("cell on selected");
  }

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

const mapStateToProps = (state, ownProps) => {

  return { selectedLibraryId: state.selectedLibraryId }

};

// 1st argument mapstateto.. or null, then actions
export default connect(mapStateToProps, actions)(ListItem);