import React from 'react'

const Form = () => {
    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        console.log(email)
        console.log(password)
        console.log(employmentStatus)
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


                <button>Submit</button>

            </form>
        </section>
    )
}

export default Form