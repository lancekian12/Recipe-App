import React from 'react'
import padsData from '../pad'
import Pad from './Pad'

const Soundpad = () => {
    const [pads] = React.useState(padsData)

    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }
    function toggle() {
        console.log("Clicked!")
    }

    const buttonElements = pads.map(pad => (
        <Pad data={pad} toggle={toggle} />
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