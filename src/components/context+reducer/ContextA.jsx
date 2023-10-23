import React, { useContext } from 'react'
import Context from "./context/context"

function ContextA() {
  const Data = useContext(Context);
  return (
    <>
      <div>ContextA</div>
      <button onClick={() => Data.countDispatch("Add")}>add</button>
    </>
  )
}

export default ContextA