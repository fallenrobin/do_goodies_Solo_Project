const singleTreatReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_TREAT':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // state.singleTreatReducer
  export default singleTreatReducer;