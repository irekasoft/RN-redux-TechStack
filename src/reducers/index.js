import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// those keys are arbitary
export default combineReducers({
  libraries: LibraryReducer, 
  selectedLibraryId: SelectionReducer
}); 

// console.log(store.getState());
// { libraries: [] } 
