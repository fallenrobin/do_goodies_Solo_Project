const navReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return action.payload;
        default:
            return state;
    }
};

// current treats will be on the redux state at:
// store.navReducer
export default navReducer;