import React from 'react'

const IngredientList = (props) => {

    const ingredientsListItems = props.ingredient.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredient.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={() => props.toggle()}>Get a recipe</button>
            </div>}
        </section>
    )
}

export default IngredientList