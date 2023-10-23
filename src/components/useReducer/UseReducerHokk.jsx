import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';

const initialState = {
    number: 0,
    marks: 50,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return { ...state, number: state.number + action.payload };
        case "Minus":
            return { ...state, number: state.number - action.payload };
        case "AddMarks":
            return { ...state, marks: state.marks + action.payload };
        case "DecMarks":
            return { ...state, marks: state.marks - action.payload };
        case "Start":
            return { ...state, number: initialState.number };
        case "marksStart":
            return { ...state, marks: initialState.marks }
        case "ApiError":
            return { ...state, error: "something went wrong" }
        default:
            return state
    }
}
function UseReducerHokk() {
    const [count, dispatch] = useReducer(reducer, initialState);

    const [article, setArticle] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8080/get/prod/tag`)
            .then(res => console.log(res.data.allTags))
            .catch(err => { dispatch({ type: "ApiError" }) })
    }, [])
    return (
        <>
            <h1>{count.error ? count.error : null}</h1>
            <div>values - {count.number}</div>
            <button onClick={() => dispatch({ type: "Add", payload: 2 })}> add value</button>
            <button onClick={() => dispatch({ type: "Minus", payload: 1 })}> dec value</button>
            <button onClick={() => dispatch({ type: "Start" })}> set default</button>
            <br /><br /><br />
            marks -  {count.marks}
            <button onClick={() => dispatch({ type: "AddMarks", payload: 10 })}>add marks</button>
            <button onClick={() => dispatch({ type: "DecMarks", payload: 10 })}>dec marks</button>
            <button onClick={() => dispatch({ type: "marksStart" })}>default marks</button>
        </>

    )
}

export default UseReducerHokk
