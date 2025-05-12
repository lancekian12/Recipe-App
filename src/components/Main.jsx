import React from 'react'

const Main = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    const [result] = React.useState("Yes")

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
                <ul>
                    {ingredientsListItems}
                </ul>
            </form>



            <main>
                <h1 className="title">Is state important to know?</h1>
                <button className="value">{result}</button>
            </main>

        </main>
    )
}

export default Main