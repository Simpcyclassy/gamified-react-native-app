import { UPDATE_PATH } from './actionTypes';

const initialState = {
    path: '/home',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_PATH:
            return {
                ...state,
                path: action.payload,
            };
        default:
            return state;
    }
};
