import Book from './components/Book';
// import './App.css';

const firstBook = {
  author: "Nathan Anthony",
  title: "Bored of lunch, the healthy slow cooker book",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81fYGEA2oOL._AC_UL600_SR600,400_.jpg"
}

const forthBook = {
  author: "Colleen Hoover",
  title: "It Ends With Us",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81PdOsc95OL._AC_UL600_SR600,400_.jpg"
}
const secondBook = {
  author: "Dr Julie Smith",
  title: "Why Has Nobody Told Me This Before?",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71gwdjwLMPL._AC_UL600_SR600,400_.jpg"
}
const thirdBook = {
  author: "Prince Harry, Duke of Sussex",
  title: "Spare",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81pHW0GJIlL._AC_UL600_SR600,400_.jpg"
}

function App() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} author={firstBook.author} title={firstBook.title} />
      <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
      <Book img={thirdBook.img} author={thirdBook.author} title={thirdBook.title} />
      <Book img={forthBook.img} author={forthBook.author} title={forthBook.title} />
    </section>
  );
}

export default App;
