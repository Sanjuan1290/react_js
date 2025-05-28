import { useState } from 'react'
import { languagesList } from './languagesList.js'
import Header from './components/Header.jsx'
import Result from './components/Result.jsx'
import Languages from './components/Languages.jsx'



export default function(){

    const [result, setResult] = useState('win');
    const [languages_Status, setLanguages_Status] = useState(languagesList);

    let attempt = 0;

    function handleClickEvent(){
        setLanguages_Status(prevStatus => {
            
            for(let i = 0; i < attempt; i++){
                
            }


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
        </>
    )
} 