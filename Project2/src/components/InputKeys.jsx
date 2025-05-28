import { useEffect } from "react";


export default function(props){

    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    const generateKey_Container = keys.map(key => {
        return <div key={key}>
            <button 
            className={props.userInputKey.includes(key) ?
                 props.answerWord.toUpperCase().includes(key) ? 'correctKey' :
                 'wrongKey' : null}
            onClick={()=>{props.onClick(key)}}
            >{key}</button>
        </div>
    })

    return(
        <section className="input-container">
            {
                generateKey_Container
            }
        </section>
    )
}