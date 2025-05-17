import { useState } from "react"

export function TogglingState(){

    const [isGoingOut, setIsGoingOut] = useState(true)
    

    function handleClickEvent(){
        setIsGoingOut(!isGoingOut)
    }

    return(
        <div>
            <h3>Do I feel like going out tonight?</h3>

            <button onClick={handleClickEvent}>{isGoingOut ? 'Yes' : 'No'}</button>
        </div>
    )
}