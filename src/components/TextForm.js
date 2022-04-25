import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function
    TextForm(props) {

    const handleUperCase = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText)
    }

    const handleLowerCase = () =>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }

    const handleOnChange = (event)=> {
    console.log("onChanage "+event.target.value)
      setText(event.target.value)
    }


    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label for="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control"  value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2'  onClick={handleUperCase}> Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerCase}> Convert to LowerCase</button>
        </div>
         
        <div className="container">
            <h2>Your text Summery </h2>
            <p>{text.split(' ').length} words  and {text.length} charectors</p>
            <p>{0.008 * text.split(' ').length} read time</p> 
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,

}

TextForm.defaultProps = {
    heading: 'Enter the text to anayze'
}



