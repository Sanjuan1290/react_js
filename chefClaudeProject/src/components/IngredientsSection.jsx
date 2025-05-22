import { useState } from "react"

export default function(){
    const [ingredients, setIngredients] = useState(
        ['all the main spices', 'pasta', 
            'ground beef', 'tomato paste'])

    const myIngredients = ingredients.map((value, index) => <li key={index}>{value}</li>)

    function handleSubmit(event){
        event.preventDefault()
        
        const form_elem = event.currentTarget
        const formData = new FormData(form_elem)

        const ingredient = formData.get('ingredient')

        if(!ingredient) return

        setIngredients(prev => [...prev, ingredient])

        form_elem.reset()
    }


    return(
        <form onSubmit={handleSubmit} method="POST">
            <section className="input_Section">
                <input type="text" placeholder="e.g. oregano"  name="ingredient"/>
                <button>Add ingredient</button>
            </section>

            <section className="ingredientList_Section">
                {
                    ingredients.length > 0 && <h2>Ingredients on hand:</h2>
                }
                <ul>
                    {myIngredients}
                </ul>
            </section>

            {
                ingredients.length >= 4 && <section className="getRecipe_Section">
                    <div>                
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>

                    <button>Get a recipe</button>
                </section>
            }

            

        </form>
    )
}