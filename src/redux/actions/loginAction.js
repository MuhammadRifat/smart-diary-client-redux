export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const REMOVE_LOGIN_DATA = "REMOVE_LOGIN_DATA";

export const addLoginData = (dataOb) => {
    return {type: ADD_LOGIN_DATA, dataOb};
}

export const removeLoginData = () => {
    return {type: REMOVE_LOGIN_DATA};
}