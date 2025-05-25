import { useState } from 'react'

export default function(){

    const [meme, setMeme] = useState({
                topText: 'One does not simply', 
                bottomText: 'Walk into Mordor',
                image: 'http://i.imgflip.com/1bij.jpg'});


    function handleOnChangeEvent(event){
        
        const {name, value} = event.target

        setMeme(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    async function handleButtonClick(){
        const response = await fetch('https://api.imgflip.com/get_memes')

        const data = await response.json();

        const randomImage = Math.floor(Math.random() * 100)

        console.log(data);
        console.log(randomImage);

        setMeme(prevValue => {
            return {
                ...prevValue,
                image: data.data.memes[randomImage].url
            }
        })
    }

    return(
        <main>
            
            <div className="inputContainer">
                <div>
                    <p>Top Text</p>
                    <input onChange={handleOnChangeEvent} name='topText' type="text" defaultValue={meme.topText}/>
                </div>

                <div>
                    <p>Bottom Text</p>
                    <input onChange={handleOnChangeEvent} name='bottomText' type="text" defaultValue={meme.bottomText}/>
                </div>
            </div>

            <button onClick={handleButtonClick}>Get a new meme image 🖼️</button>

            <div className="memeContainer">
                <img src={meme.image} alt="meme image" />

                <p className="topText">{meme.topText.toUpperCase()}</p>
                <p className="bottomText">{meme.bottomText.toUpperCase()}</p>

            </div>
        </main>
    )
}