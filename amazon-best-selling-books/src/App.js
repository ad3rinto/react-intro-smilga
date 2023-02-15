import Book from './components/Book';
// import './App.css';
import books from './listOfBooks';





const newBooks = books.map((item) => {
  return (<><Book img={item.img} author={item.author} title={item.title} key={item.id} />

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
