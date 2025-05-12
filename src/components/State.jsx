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

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function click() {
        setIsGoingOut(prev => {
            return !prev
        })
    }

    return (
        <main className="container">
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
                <button onClick={click} className="value">{isGoingOut ? "yes" : "false"}</button>

            </div>
        </main>
    )
}

export default State