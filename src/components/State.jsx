import React from 'react'

const State = () => {
    let [isImportant, setIsImportant] = React.useState("Yes")

    function handleClick() {
        setIsImportant("Definitely")
    }

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}

export default State