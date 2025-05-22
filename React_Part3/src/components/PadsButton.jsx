import { useState } from 'react'
import padsData from './pads.js'


export default function(){
    const [pads, setPads] = useState(padsData)

    function handleBtnClick(padId){
        setPads(prevPads => {
            return prevPads.map(value => padId === value.id ? {...value, on: !value.on} : value)
        })
    }

    const myButtons = pads.map(pad => <button 
            key={pad.id}
            style={{backgroundColor: pad.color}}
            className={pad.on ? 'btnOn' : null}
            onClick={() => {
                handleBtnClick(pad.id)
            }}

         ></button>)

    return(
        <div className="pad_container">
            {myButtons}
        </div>
    )
}
