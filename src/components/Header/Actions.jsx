import React from 'react'
import './Actions.css'
import CV from '../../assets/cv.pdf'
function Actions() {
    return (
        <div className="action-ele">
            <a className='btn' href={CV} download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Lets Talk</a>
        </div>
    )
}

export default Actions