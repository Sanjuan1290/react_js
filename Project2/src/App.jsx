import { useRef, useEffect, useState } from 'react'
import {faker}  from '@faker-js/faker'
import Confetti from 'react-confetti'
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
    const [attempts, setAttempts] = useState(0)

    const newGameRef = useRef();

    useEffect(()=>{
        if(result !== "") newGameRef.current.focus()
    }, [result])


    useEffect(()=> {
        result === 'win' || result === 'loss' ? 
        window.removeEventListener('keydown', handleKeyEnter) :
        window.addEventListener('keydown', handleKeyEnter)

        return () => {
            window.removeEventListener('keydown', handleKeyEnter);
        };
    }, [result])


    useEffect(()=>{
        setLanguages_Status(prev_Languages_Status => (
            prev_Languages_Status.map((prevLang) => {
                
                if(attempts === 9){
                    isSolved('loss')
                    return prevLang

                }else  return attempts === prevLang.id ? {...prevLang, isAlive: false}: prevLang
            })
        ))   
    }, [attempts])

    function handleClickEvent(inputKey){

        setUserInputKey(prev => {
            if(prev.includes(inputKey)){
                return prev
            }else{
                setAttempts(prev => {
                    if(!answerWord.toUpperCase().includes(inputKey)) return prev + 1
                    else return prev
                })
                return [...prev, inputKey]
            }
        })
    }

    function handleKeyEnter(event){
        console.log('key press: ' + event.key);
        if(event.key.match(/^[a-zA-Z]$/)){

            setUserInputKey(prev => {
                    if(prev.includes(event.key.toUpperCase())){
                        return prev
                    }else{
                        setAttempts(prev => {
                            if(!answerWord.toUpperCase().includes(event.key.toUpperCase())) return prev + 1
                            else return prev
                        })
                        return [...prev, event.key.toUpperCase()]
                    }      
                }  
            )
        }
    }

    function isSolved(result){
        setResult(result)
    }

    function startNewGame(){
        setResult('')
        setAnswerWord(faker.word.verb())
        setUserInputKey([])
        setAttempts(0)
        setLanguages_Status(prev => (
            prev.map(status => ({...status, isAlive: true}))
        ))
    }

    return(
        <>
            {
                result === 'win' ? <Confetti /> : null
            }

            <Header />
            {
                result === '' ? null : <Result gameResult={result} />
            }

            <Languages languages={languages_Status}/>

            <Answer 
            answerWord={answerWord} 
            userInputKey={userInputKey} 
            isSolved={isSolved}/>

            <InputKeys 
            onClick={handleClickEvent}
            answerWord={answerWord}
            userInputKey={userInputKey}
            />

            {
                result === '' ? null : <button ref={newGameRef} 
                                onClick={startNewGame} 
                                className='newGameBtn'>New Game</button>
            }
        </>
    )
} 