
import {getRecipeFromMistral} from '../ai.js'

export default function(props){
    


    return(
        <section className="recipeRecommend_container">
            <h1>Chef Calude Recommends:</h1>

            {
                getRecipeFromMistral(props.ingredients)
            }
        </section>
    )
}