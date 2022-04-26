import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function
    TextForm(props) {

    const handleUperCase = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText)
        props.showAlert("Converted to Upper Case","success")
    }

    const handleLowerCase = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to Lower Case","success");

    }

    const handleOnChange = (event) => {

      setText(event.target.value)
    }

    const clearText = () => {
        setText('')
        props.showAlert("Text Cleard ","success")
    }

    const removeExtaSpace = () => {
        let newText = text.split(/[ ]+/);
        console.log(newText)
        setText(newText.join("  "));
    }

    const countWords = (str) => {
        const arr = str.split(' ');
         return arr.filter(word => word !== '').length;
      }


      const charectorsCount = (str) => {
        const arr = str.split(/[ ]+/);
        return arr.join().length;
      }

    

    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{
                color: props.mode === 'dark' ? 'white' : 'black',

            }}>
                <div className='container'  >
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">{props.heading}</label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'light' ? 'white' : 'gray'
                        }} id="myBox" rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={handleUperCase}  > Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLowerCase}> Convert to LowerCase</button>
                    <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
                    <button className='btn btn-primary mx-2' onClick={removeExtaSpace}>Remove Extra Spaces</button>
                </div>

                <div className="container">
                    <h2>Your text Summery </h2>
                    <p>{countWords(text)} words  and {charectorsCount(text)} charectors</p>
                    <p>{0.008 * countWords(text)} read time</p>
                    <h4>Preview</h4>
                    <p>{countWords(text)>0?text:"Please Enter Text to show the preview"}</p>
                </div>
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



