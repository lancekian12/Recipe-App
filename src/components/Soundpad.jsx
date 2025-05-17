import React from 'react'
import padsData from '../pad'

const Soundpad = (props) => {
    const [pads] = React.useState(padsData)

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const buttonElements = pads.map(pad => (
        <button style={styles} className='button-custom' key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

export default Soundpad