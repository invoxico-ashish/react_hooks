import React, { useContext } from 'react'
import Context from './context/context';

function ContextB() {
  const Data = useContext(Context);
  return (
    <>
      <div>ContextB</div>
      <button onClick={() => Data.countDispatch("Minus")}>remove</button>
      <button onClick={() => Data.countDispatch("reset")}>reset</button>
    </>

  )
}

export default ContextB