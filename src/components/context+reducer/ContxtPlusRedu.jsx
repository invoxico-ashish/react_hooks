import React, { useReducer } from 'react'
import ContextA from './ContextA';
import ContextB from './ContextB';
import { Provider } from './context/context';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Add":
            return state + 1;
        case "Minus":
            return state - 1;
        case "reset":
            return initialState
    }
};
function ContxtPlusRedu() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const passObj = {
        countNumber: count,
        countDispatch: dispatch
    }
    return (
        <>
            <div>ContxtPlusRedu</div>
            {count}
            <Provider value={passObj}>
                <ContextA />
                <ContextB />
            </Provider>
        </>
    );
};

export default ContxtPlusRedu