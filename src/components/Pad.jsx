import React from 'react'

const Pad = (props) => {
    console.log(props.data.on)
    const styles = {
        backgroundColor: props.data.color
    }
    return (
        <button className={props.data.on ? "on" : "button-custom"}
            style={styles} key={props.data.id}></button>
    )
}

export default Pad