import { ADD_LOGIN_DATA, REMOVE_LOGIN_DATA } from "../actions/loginAction";


const initialState = {
    loggedUser: {}
}

const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGIN_DATA:
            return {loggedUser: action.dataOb};
        case REMOVE_LOGIN_DATA:
            return {};
        default: 
            return state;
    }
}

export default loginReducers;