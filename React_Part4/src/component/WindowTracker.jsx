import { useState } from "react";
import { useEffect } from "react"

export default function(){

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    console.log('load Window Tracker');

    useEffect(()=> {
        function windowEventHandler(){
            setWindowSize(window.innerWidth)
            console.log('Resized');
        }

        window.addEventListener('resize', windowEventHandler)

        return () => {
            console.log('unload Window');
            window.removeEventListener('resize', windowEventHandler)
        }
    }, [])


    return(
        <p>Window width: {windowSize}</p>
    )
}