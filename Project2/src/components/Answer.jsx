import { useEffect, useState } from "react";


export default function(props){

    let inputtedLetters = []
    let missingLetters = []

        
    if(props.result === 'loss'){
        console.log("inputtedLetters: "), inputtedLetters;
        const letters = props.answerWord.split('').map(keyAnswer => {
            return !inputtedLetters.includes(keyAnswer.toUpperCase()) ? keyAnswer.toUpperCase() : null
        })

        missingLetters = letters.filter(key => key !== null)

        console.log("missingLetters: " + missingLetters);
    }


    useEffect(()=>{
        if(inputtedLetters.join('') === props.answerWord.toUpperCase()){
            props.isSolved('win')
        }
    }, [inputtedLetters])

    const wordToGuess_Letters = props.answerWord.toUpperCase().split('')

    const generate_Letter_containers = wordToGuess_Letters.map((letter, index) => {

        if(props.userInputKey.includes(letter) && props.userInputKey.length !== 0){
            inputtedLetters.push(letter)
        }

        return (
            <div key={index}>

                {
                    props.userInputKey.includes(letter) && 
                    props.userInputKey.length !== 0 ? <p>{letter}</p> :  props.result === 'loss' ? 
                    !props.userInputKey.includes(letter) ? <p className="missingLetters">{missingLetters[index]}</p> : <p></p> : null
                }      

            </div>
        );
    });


    return(
        <section className="answer-container">
            {
                generate_Letter_containers
            }
        </section>
    )
}