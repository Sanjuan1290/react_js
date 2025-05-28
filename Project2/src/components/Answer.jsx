import { useEffect, useState } from "react";


export default function(props){

    let inputtedLetters = []

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
                <p>
                    {props.userInputKey.includes(letter) && 
                    props.userInputKey.length !== 0 ? letter : ''}
                </p>
            </div>
        );
    });

    props.userInputKey

    return(
        <section className="answer-container">
            {
                generate_Letter_containers
            }
        </section>
    )
}