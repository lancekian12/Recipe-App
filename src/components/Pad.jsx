import React from 'react'

const Pad = (props) => {
    console.log(props.data.on)

    const [on] = React.useState(props.on)

    // function handleClick() {
    //     return setOn(prev => !prev)
    // }
    return (
        <button
            onClick={props.toggle}
            style={{ backgroundColor: props.color }}
            className={on ? "on" : undefined}
        ></button>
    )
}

export default Pad