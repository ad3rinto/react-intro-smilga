import React from 'react'
import EventsExamples from './EventsExamples';


function Book(props) {
    return (

        <article className='book'>
            <EventsExamples />
            <img src={props.img} alt="bookies" />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>

    );

}

export default Book