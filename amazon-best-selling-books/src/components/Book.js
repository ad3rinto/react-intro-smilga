import React from 'react'
import EventsExamples from './EventsExamples';


function Book(props) {
    const getBook = (id) => {
        const book = props.books.find((book) => book.id === id)
        console.log(book);

    }

    const getSingleBook = () => {
        getBook(props.id)
    }



    return (

        <article className='book'>
            <EventsExamples title={props.title} getBook={getBook} getSingleBook={getSingleBook} />
            <img src={props.img} alt="bookies" />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>

    );

}

export default Book