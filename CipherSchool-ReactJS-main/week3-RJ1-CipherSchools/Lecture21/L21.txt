export const [ INCREMENT, DECREMENT, RESET ] = ["INCREMENT", "DECREMENT", "RESET"];

const countReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
};

export default countReducer;
____________________________________________________________________________________

import { INCREMENT, DECREMENT, RESET } from "../reducers/CountReducer";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
______________________________________________________________________________________

import React from "react";

const ReduxCounter = () => {
    return (
        <div>
            <h2>The count is: 0</h2>
            <button>Increase</button>
            <button>decrease</button>
            <button>Reset</button>
        </div>
    );
};

export deafault ReduxCounter;
____________________________________________________________________________________

import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/CounterActions";

const ReduxCounter = ({ count }) => {
    return (
        <div>
            <h2>The count is: {count}</h2>
            <button>Increase</button>
            <button>decrease</button>
            <button>Reset</button>
        </div>
    );
};

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
    increment: () => display(increment()),
    decrement: () => display(decrement()),
    reset: () => dispaly(reset()),
});

export deafault connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
_______________________________________________________________________________________

import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/CounterActions";

const ReduxCounter = ({ count }) => {
    return (
        <div>
            <h2>The count is: {count}</h2>
            <button>Increase</button>
            <button>decrease</button>
            <button>Reset</button>
        </div>
    );
};

export deafault ReduxCounter;