const { createStore } = require("redux");
// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
// state

const initialCounterState = {
    count:0,
};
const initialUsersState = {
    users: [{ name: "Anisul Islam"}],
};

// action
// INCREMENT COUNTER Action
const IncrementCounter = () => {
    return {
        type:INCREMENT,
    }
};
// DECREMENT COUNTER Action
const DecrementCounter = () => {
    return {
        type:DECREMENT,
    }
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: {name: user}
    }
};

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store
// create reducer
const counterReducer = (state=initialCounterState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            //
    }
};

// store
// there are three components of store.
// 1. getState(), dispatch() and subscribe();
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
});
// dipatch action
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: DECREMENT });