const bakesaleReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BAKESALES':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // state.bakesaleReducer
  export default bakesaleReducer;