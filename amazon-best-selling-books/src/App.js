import Book from './components/Book';
// import './App.css';
import { books } from './listOfBooks';





const newBooks = books.map((item, index) => {
  return (<><Book img={item.img} author={item.author} title={item.title} key={item.id} books={books} id={item.id} number={index} />

  </>)
})





const App = () => {
  return (
    <section className='booklist'>
      {newBooks}
      )

    </section>
  );
}

export default App;
