import React from 'react'

export default function(){
    
    let [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    function handleClick(event){
        event.preventDefault()

        const input = document.querySelector('.ingredientInput');
        const value = input.value.trim()

        if (!value) return

        setIngredients(prevIngredient => [...prevIngredient, value])
        input.value = "";
    }

    return(
        <main>
            <form className="inputForm" onSubmit={handleClick}>

                <input type="text" 
                placeholder="e.g. oregano" 
                aria-label="Add Ingredient"
                name="ingredient"
                className="ingredientInput"/>

                <button type="submit">Add ingredient</button>
            </form>

            <ul>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </main>
    )
}