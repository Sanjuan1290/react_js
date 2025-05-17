import { useState } from "react"

export default function(){
    const [ingredients, setIngredients] = useState([])

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
                <ul>
                    {myIngredients}
                </ul>
            </section>
        </form>
    )
}