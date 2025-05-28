import { useState } from 'react'
import {faker}  from '@faker-js/faker'
import { languagesList } from './languagesList.js'
import Header from './components/Header.jsx'
import Result from './components/Result.jsx'
import Languages from './components/Languages.jsx'
import Answer from './components/Answer.jsx'
import InputKeys from './components/InputKeys.jsx'



export default function(){

    const [answerWord, setAnswerWord] = useState(faker.word.verb())
    const [result, setResult] = useState('win');
    const [languages_Status, setLanguages_Status] = useState(languagesList);

    let attempt = 0;

    function handleClickEvent(){
        setLanguages_Status(prevStatus => {
        })
    }
    function handleKeyEvent(){
    }

    return(
        <>
            <Header />
            {
                result === '' ? null : <Result gameResult={result} />
            }

            <Languages languages={languages_Status}/>
            <Answer answerWord={answerWord}/>
            <InputKeys onClick={handleClickEvent}/>

            <button className='newGameBtn'>New Game</button>
        </>
    )
} 