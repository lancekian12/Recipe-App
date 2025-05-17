import React from 'react'
import padsData from '../pad'

const Soundpad = () => {
    const [pads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <button className='button-custom' key={pad.id}></button>
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