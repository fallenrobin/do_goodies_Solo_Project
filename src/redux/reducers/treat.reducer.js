const treatReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_TREATS':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // state.treatReducer
  export default treatReducer;