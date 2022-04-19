const singleBakesaleReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_BAKESALE':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // state.singleBakesaleReducer
  export default singleBakesaleReducer;