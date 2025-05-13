import React from 'react'

const Form = () => {
    return (
        <section>
            <h1>Signup form</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" />
                <br />

                <input type="submit" />


            </form>
        </section>
    )
}

export default Form