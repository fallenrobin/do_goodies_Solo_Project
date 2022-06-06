const dialogReducer = (state = false, action) => {
    switch (action.type) {
      case 'OPEN':
        return true;
      case 'CLOSE':
        return false;
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // store.dialogReducer
  export default dialogReducer;