import { useState } from "react"

export default function(){
    const [ingredients, setIngredients] = useState(['Chicken', 'Oregano', 'Tomatoes'])

    const myIngredients = ingredients.map((value, index) => <li key={index}>{value}</li>)

    function handleEvent(event){
        event.preventDefault()

        const IngredientInput_elem = document.querySelector('.IngredientInput')
        const value = IngredientInput_elem.value.trim()
        if(!value) return

        setIngredients(prev => [...prev, value])

        IngredientInput_elem.value = '';
    }
    return(
        <form>
            <section className="input_Section">
                <input type="text" placeholder="e.g. oregano" className="IngredientInput"/>
                <button  onClick={handleEvent} >Add ingredient</button>
            </section>

            <section className="ingredientList_Section">
                <ul>
                    {myIngredients}
                </ul>
            </section>
        </form>
    )
}