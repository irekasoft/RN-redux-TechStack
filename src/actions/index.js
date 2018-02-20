// action creator

export const selectLibrary = (libraryId) => {
  
  console.log('lib selected');
  
  return {

    type: 'select_library',
    payload: libraryId,

  };

}