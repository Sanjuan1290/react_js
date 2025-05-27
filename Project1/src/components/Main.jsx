import { useEffect, useRef, useState } from "react"


export default function(){
    const buttonContainerRef = useRef()
    
    const [allButtons, setAllButtons] = useState([]) // based on value
    const [DisabledButtons, setDisabledButtons] = useState([]) //based on index
    const [isFinished, setIsFinished] = useState(false)

    // useEffect(()=>{
    //     setAllButtons(generateRandomNumbers())
    // }, [])

    useEffect(()=>{
        if(DisabledButtons.length === 10){
            console.log('Congratulation!');
            setIsFinished(true)
        }
    }, [DisabledButtons])

    useEffect(()=>{
        setAllButtons(generateRandomNumbers())
    }, [isFinished])

    function generateRandomNumbers(){
        const numberList = []

        for(let i = 0; i < 10; i++){            
            const randomNumber = Math.ceil(Math.random() * 6)

            if(DisabledButtons.includes(i)){
                numberList.push(allButtons[i])
            }else{
                numberList.push(randomNumber)
            }
        }

        return numberList
    }

    function rollDice(){
        setAllButtons(generateRandomNumbers())
    }

    function freezeBtn(event){
        const buttonId = Number(event.target.id);

        if(DisabledButtons.length === 0){
            setDisabledButtons(prevDisableButtons => [...prevDisableButtons, buttonId])  
            return
        }

        const firstDisabledButton = DisabledButtons[0]

        if(allButtons[firstDisabledButton] === allButtons[buttonId]) {
            setDisabledButtons(prevDisableButtons => [...prevDisableButtons, buttonId])  
        }

    }

    function playAgain(){
        // buttonContainerRef.current.querySelectorAll('button').forEach(btn => {
        //     btn.style.background = 'white'
        // })
        setDisabledButtons([])
        setIsFinished(false)
    }

    
    return(
        <main>
            <section ref={buttonContainerRef} className="button-container">
                { //generate Buttons
                    allButtons.map((btnNum, index) => <button
                    id={index} 
                    className={DisabledButtons.includes(index) ? "disabledBtn" : null}
                    onClick={DisabledButtons.includes(index) ? null : freezeBtn}
                    key={index}>{btnNum}</button>)
                }
            </section>

            {
                isFinished ? <button className="rollBtn" onClick={playAgain}>Play Again</button> : 
                <button className="rollBtn" onClick={rollDice}>Roll</button>
            }
        </main>
    )
}