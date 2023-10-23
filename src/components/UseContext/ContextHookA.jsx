import React from 'react'
import ContextHookB from './ContextHookB'
import Context from './Context'
import { useContext } from 'react'

function ContextHookA() {

    const mainContext = useContext(Context)
    return (
        <>
            <div>Context Hook A {mainContext.id}</div>
            <ContextHookB />
        </>
    )
}

export default ContextHookA