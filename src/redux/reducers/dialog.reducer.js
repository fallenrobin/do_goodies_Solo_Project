const dialogReducer = (state = false, action) => {
    switch (action.type) {
      case 'OPEN_DIALOG':
        return true;
      case 'CLOSE_DIALOG':
        return false;
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // store.dialogReducer
  export default dialogReducer;