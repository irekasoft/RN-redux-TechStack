import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  LayoutAnimation 
} from 'react-native';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../actions'; 

// MY COMPONENTS
import { CardSection, Card } from './common';

class ListItem extends Component {

  componentDidUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription(){
    // Some sort of declaration of props here.
    const { library, selectedLibraryId, expanded } = this.props;
    if (expanded == true) {
      return(
        <CardSection>
          <Text style={styles.title}> 
            {library.description}
          </Text>
        </CardSection>

      );
    }else {
      return ;
    }
  }

  cellOnSelected(id){
    var myId = 0;
    console.log("cell on selected: " + this.props.selectedLibraryId + ' id: ' + id);
    if (this.props.selectedLibraryId == id){

      myId = -1;
    }else{
      myId = id;
    }

    this.props.selectLibrary(myId);
  }

  // ??: Is after call selectLibrary(id), the render called automatically?
  render () {

    // deconstructing
    const { id, title } = this.props.library;

    var myId;

    return(
      // touchable without feedback was not working
      <TouchableOpacity
        // select library from actions
        onPress={ ()=> this.cellOnSelected(id) }
        // onPress={ ()=> this.cellOnSelected() }
      >
        <Card>
        <CardSection>
          <Text style={styles.title}>
            {title}
          </Text> 
        </CardSection>
          {this.renderDescription()}
        </Card>
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
// when state changes, it will rerender
const mapStateToProps = (state, ownProps) => {
  
  var expanded = false;
  
  if (state.selectedLibraryId === ownProps.library.id){
    expanded = true;
  }

  return { 
    expanded , 
    selectedLibraryId : state.selectedLibraryId, 
  }

};

// @1.. argument mapStateToProps.. or null, then actions
// @2.. action object
export default connect(mapStateToProps, actions)(ListItem);