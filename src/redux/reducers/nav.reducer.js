const navReducer = (state = 0, action) => {
    switch (action.type) {
        case 'PROFILE':
            return 0;
        case 'TREATS':
            return 1;
        case 'BAKESALES':
            return 2;
        case 'DONATIONS':
            return 3;
        default:
            return state;
    }
};

// current treats will be on the redux state at:
// store.navReducer
export default navReducer;