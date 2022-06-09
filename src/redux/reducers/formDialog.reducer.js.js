const formDialogReducer = (state = false, action) => {
    switch (action.type) {
      case 'OPEN_FORM_DIALOG':
        return true;
      case 'CLOSE_FORM_DIALOG':
        return false;
      default:
        return state;
    }
  };
  
  // current treats will be on the redux state at:
  // store.formDialogReducer
  export default formDialogReducer;