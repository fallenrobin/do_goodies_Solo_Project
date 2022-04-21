const editReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EDIT':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // store.editReducer
  export default editReducer;