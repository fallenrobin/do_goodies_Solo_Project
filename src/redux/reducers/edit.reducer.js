const editReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_TREAT':
      return action.payload;
    case 'EDIT_BAKESALE':
      return action.payload;
    case 'CLEAR_EDIT':
      return {};
    default:
      return state;
  }
};

// current treats will be on the redux state at:
// store.editReducer
export default editReducer;