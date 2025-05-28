import { useEffect, useState } from 'react'
import {faker}  from '@faker-js/faker'
import { languagesList } from './languagesList.js'
import Header from './components/Header.jsx'
import Result from './components/Result.jsx'
import Languages from './components/Languages.jsx'
import Answer from './components/Answer.jsx'
import InputKeys from './components/InputKeys.jsx'



export default function(){

    const [answerWord, setAnswerWord] = useState(faker.word.verb())
    const [result, setResult] = useState(''); //win or loss
    const [languages_Status, setLanguages_Status] = useState(languagesList);
    const [userInputKey, setUserInputKey] = useState([])

    let attempt = 0;

    console.log(answerWord);


    useEffect(()=> {
        result === 'win' || result === 'loss' ? 
        window.removeEventListener('keydown', handleKeyEnter) :
        window.addEventListener('keydown', handleKeyEnter)

        return () => {
            window.removeEventListener('keydown', handleKeyEnter);
        };
    }, [result])


    function handleClickEvent(inputKey){
        setUserInputKey(prev => [...prev, inputKey])
    }
    function handleKeyEnter(event){
        setUserInputKey(prev => [...prev, event.key.toUpperCase()])

        
    }

    function isSolved(){
        setResult('win')
    }   

    return(
        <>
            <Header />
            {
                result === '' ? null : <Result gameResult={result} />
            }

            <Languages languages={languages_Status}/>

            <Answer 
            answerWord={answerWord} 
            userInputKey={userInputKey} 
            isSolved={() => {isSolved()}}/>

            <InputKeys 
            onClick={handleClickEvent}
            answerWord={answerWord}
            userInputKey={userInputKey}
            />

            <button className='newGameBtn'>New Game</button>
        </>
    )
} 