import {useState} from 'react'

export function ArrayState(){

    const [myFavoriteThings, setMyFavoriteThings] = useState(['Test'])

    const myFavoriteThings_element = myFavoriteThings.map((favorite, index) => <li key={index}>{favorite}</li>)

    function handleCLickEvent(){
        setMyFavoriteThings(myFavoriteThings => [...myFavoriteThings, 'Test'])
    }

    return(

        <div>
            <button onClick={handleCLickEvent}>Add Item</button>

            <ul>
                {myFavoriteThings_element}
            </ul>
        </div>
    )
}