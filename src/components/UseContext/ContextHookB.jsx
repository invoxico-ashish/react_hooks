import React from 'react'
import Context, { Consumer } from './Context'

function ContextHookB() {
    return (
        <>
            <div>Context Hook B</div>
            <Consumer>
                {
                    (data) => {
                        console.log(data)
                    }
                }
            </Consumer>
        </>
    )
}

export default ContextHookB