import React from 'react'

const Pad = (props) => {
    const styles = {
        backgroundColor: props.data.color
    }
    return (
        <button style={styles} key={props.data.id}></button>
    )
}

export default Pad