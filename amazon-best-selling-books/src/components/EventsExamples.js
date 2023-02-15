import React from 'react'

function EventsExamples() {
    const handleFormInput = () => {
        console.log("Handle form input")
    }
    const handleButtonClick = () => {
        console.log("Handle button click")
    }
    return (
        <div>
            <form action="">
                <input type="text" onChange={handleFormInput}></input>
            </form>
            <button type='submit' onClick={handleButtonClick}>Click Me </button>
        </div>
    )
}

export default EventsExamples