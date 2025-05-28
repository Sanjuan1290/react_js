import { useState } from "react";


export default function App(){
    const [dice, setDice] = useState(() => generateDice())

    function generateDice(){
        console.log('generate Dice');

        return new Array(10)
        .fill(0)
        .map(() => Math.ceil(Math.random() * 6))
    }


    function handleClick(){
        setDice(generateDice())
    }



    console.log(dice);
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}