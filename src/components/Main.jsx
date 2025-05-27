import React from 'react'
import Count from '../practice_component/Count'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'
const Main = () => {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState("")
    const recipeSection = React.useRef(null)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }



    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    // const [count, setCount] = React.useState(0)

    // function add() {
    //     setCount(prevCount => prevCount + 1)
    // }

    // function subtract() {
    //     setCount(prevCount => prevCount - 1)
    // }
    React.useEffect(() => {
        if (recipeShown !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipeShown])


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientList ref={recipeSection}
                ingredient={ingredients} toggle={toggleRecipeShown} />}

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}

export default Main