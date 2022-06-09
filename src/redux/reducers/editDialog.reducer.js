const editDialogReducer = (state = false, action) => {
    switch (action.type) {
      case 'OPEN_EDIT_DIALOG':
        return true;
      case 'CLOSE_EDIT_DIALOG':
        return false;
      default:
        return state;
    }
  };
  
  // current open state will be on the redux state at:
  // store.editDialogReducer
  export default editDialogReducer;