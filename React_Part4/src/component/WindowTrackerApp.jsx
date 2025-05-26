import { useState } from "react"
import WindowTracker from "./WindowTracker"

export default function(){

    const [toggleWindow, setToggleWindow] = useState(true)

    function handleClickEvent(){
        setToggleWindow(prev => !prev)
    }

    return(
        <div>
            <button onClick={handleClickEvent} className="windowTrackerBtn">Toggle Window Tracker</button>
            {
                toggleWindow && <WindowTracker />
            }
        </div>
    )
}