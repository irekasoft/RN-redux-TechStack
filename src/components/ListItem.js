import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../actions'; 

// MY COMPONENTS
import { CardSection } from './common';

class ListItem extends Component {

  renderDescription(){

    const { library, selectedLibraryId } = this.props;

    if (library.id === this.props.selectedLibraryId) {
      return(
        <Text> - {library.description}</Text>
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

// @1.. argument mapStateToProps.. or null, then actions
// @2.. action object
export default connect(mapStateToProps, actions)(ListItem);