import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

// I missed here, wrongly imported from ./common, and used { ListItem }
import ListItem from './ListItem';

// tool to explicitly to connect to redux store
import { connect } from 'react-redux';


class LibraryList extends Component {

  // 1. called when this component will boot up
  componentWillMount(){

    // boilerplate setup
    // data source
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);

  }

  // render single element of the row
  // argument is the item that is need to be rendered
  renderRow(library){
    // 2. Will call this ListItem for every cell
    return <ListItem library={library}/>
    //return <View><Text>{library.id}</Text></View>
  }

  render(){

    console.log( "props" + this.props);
    
    return (
      
      <View style={{ flex: 1 }}>
       <ListView 
         dataSource = {this.dataSource}
         renderRow = {this.renderRow}
       />
      </View>
    );

  }

}

// application state, map it in,
// provide as props 
// well... how this work? 
// put console log
const mapStateToProps = state => {

  console.log('mapStateToProps ' + state);
  return { libraries: state.libraries };

};

// glue react and redux
// help to get the redux store
// missed here.... was connect()....
export default connect(mapStateToProps)(LibraryList);
