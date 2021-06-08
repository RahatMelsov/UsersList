import { combineReducers, createStore } from 'redux';

// Фамилия, Имя, дата рождения, Расположение
const ADD_USERS_DATA = 'ADD_USERS_DATA';

let initialState = {
    Users: [
        {
            named: "Oliver ",
            lastName: 'Manson',
            DateOfBirth: new Date('1995-12-17'),
                city: 'Liverpool',
                cowntry: 'GreatBrit',
            id: 0,
        },
        {
            named: "Harry ",
            lastName: 'Jackson',
            DateOfBirth: new Date('1995-12-17'),
                city: 'Almaty',
                cowntry: 'Kazakhstan',
            id: 1,
        },
        {
            named: "Jacob ",
            lastName: 'Grayson',
            DateOfBirth: new Date('1995-12-17'),
                city: 'Almaty',
                cowntry: 'Kazakhstan',
            id: 2,
        }
    ]
}

window.state = initialState;

let UsersData = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USERS_DATA: {
            return {
                ...action.main
            }
            break;
        }
        default:
            return state;
    }

}

let redusers = combineReducers({
    UsersPage: UsersData,
})

let store = createStore(redusers);

export const addusersDataAC = (main) => ({
    type: ADD_USERS_DATA,
    main,
});


export default store;