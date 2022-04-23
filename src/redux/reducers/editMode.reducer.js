const editModeReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EDIT_MODE':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // store.editModeReducer
  export default editModeReducer;