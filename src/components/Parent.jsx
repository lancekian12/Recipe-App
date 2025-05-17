import React from 'react'
import ChildOne from "./Child_ONE"
import ChildTwo from "./Child_TWO"

const Parent = () => {
    const [userName] = React.useState("Joe")

    return (
        <main>
            <ChildOne userName={userName} />
            <ChildTwo userName={userName} />
        </main>)
}

export default Parent