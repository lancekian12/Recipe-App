import React from 'react'

const State = () => {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(function (prevCount) {
            return prevCount + 1
        })
    }

    function subtract() {
        setCount(prev => prev - 1)
    }

    const isGoingOut = true
    let answer = isGoingOut ? "Yes" : "No"

    return (
        <main className="container">
            <div className="counter">
                <h1>{answer}</h1>
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}

export default State