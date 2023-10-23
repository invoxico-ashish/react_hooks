import React from 'react'
import ContextHookA from './components/UseContext/ContextHookA'
import { Provider } from "./components/UseContext/Context"
import UseReducerHokk from './components/useReducer/UseReducerHokk'
import ContxtPlusRedu from './components/context+reducer/ContxtPlusRedu'


function App() {
  const data = {
    id: "5654684",
    name: "hhduiagh",
    tet: "gduygv"
  }
  return (
    <>



      <ContxtPlusRedu />





      {/* simple useReducer hook */}
      {/* <div>useReducer hook</div>
      <UseReducerHokk /> */}

      {/* 
      <Provider value={data}>
        <ContextHookA />
      </Provider> */}
    </>

  )
}

export default App