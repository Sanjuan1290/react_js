import React from 'react'

export function Practice(){
    let [stateNumber, setStateNumber] = React.useState(0)

    function subtractState(){
        setStateNumber(stateNumber - 1)
    }

    function addState(){
        setStateNumber(stateNumber + 1)
    }

    return(
        <div>
            <h3>How many times will Bob say "state" in this section?</h3>

            <div className="circleContainer">
                <button onClick={subtractState} className="operation subtract">-</button>
                <p className="numberState">{stateNumber}</p>
                <button onClick={addState} className="operation add">+</button>
            </div>
        </div>
    )
}