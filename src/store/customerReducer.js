const defaultState = {
    customer: [
      'name',
        
    ],
};

//action = {type: '', payload: ''}
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return { ...state, customer: [...state.customer + action.payload] };
        case 'GET_CUSTOMER':
            return { ...state, customer: [...state.customer + action.payload] };

        default:
            return state;
    }
};
