import React from 'react'

const Pad = (props) => {
    console.log(props.data.on)


    return (
        <button
            onClick={() => props.toggle(props.data.id)}
            style={{ backgroundColor: props.data.color }}
            className={props.data.on ? "on" : "button-custom"}
        ></button>
    )
}

export default Pad