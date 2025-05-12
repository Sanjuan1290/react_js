
export default function(){
    function handleClick(event){
        event.preventDefault()
        console.log('Form Submitted!');

        ingredients.push(document.querySelector('.ingredientInput').value)

        console.log(ingredients);
    }

    let ingredients = ["Chicken", "Oregano", "Tomatoes"]

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