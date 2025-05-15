import React, { useState } from 'react'


export function Practice(){
    const [stateNumber, setStateNumber] = useState(0)


    function addState(){
        setStateNumber((prevState) => {
            return prevState + 1
        })
    }

    function subractState(){
        setStateNumber((prevState) => {
            return prevState - 1
        })
    }

    return(
        <div className="container">
            <p>How many times will Bob say "state" in this section?</p>

            <div className="content">
                <button onClick={subractState} className="subtract operator">-</button>
                <p className="value">{stateNumber}</p>
                <button onClick={addState} className="add operator">+</button>
            </div>
        </div>
    )
}