import { useState } from "react";
import { useEffect } from "react"

export default function(){

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setWindowSize(window.innerWidth)
            console.log(window.innerWidth);
        })
    }, [])


    return(
        <p>Window width: {windowSize}</p>
    )
}