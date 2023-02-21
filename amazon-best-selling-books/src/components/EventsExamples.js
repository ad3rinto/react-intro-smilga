import React from 'react'

function EventsExamples(props) {
    // const handleFormInput = () => {
    //     console.log("Handle form input")

    const handleButtonClick = () => {
        console.log(props.title)
    }
    return (
        <div>
            <form action="">
                <input type="text" onChange={props.getSingleBook}></input>
            </form>
            <button type='submit' onClick={handleButtonClick}>Click Me </button>
        </div>
    )
}

export default EventsExamples