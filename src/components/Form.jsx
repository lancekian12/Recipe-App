import React from 'react'

const Form = () => {
    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        console.log(email)
        console.log(password)
        console.log(employmentStatus)
        console.log(dietaryRestrictions)
    }
    return (

        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" />
                <br />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>
                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked="true" value="full-time" />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>


                <button>Submit</button>

            </form>
        </section>
    )
}

export default Form