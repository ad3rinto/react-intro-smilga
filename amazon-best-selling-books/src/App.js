import Book from './components/Book';
// import './App.css';

const books = [{
  author: "Nathan Anthony",
  title: "Bored of lunch, the healthy slow cooker book",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81fYGEA2oOL._AC_UL600_SR600,400_.jpg",
},

{
  author: "Colleen Hoover",
  title: "It Ends With Us",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81PdOsc95OL._AC_UL600_SR600,400_.jpg"
},
{
  author: "Dr Julie Smith",
  title: "Why Has Nobody Told Me This Before?",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71gwdjwLMPL._AC_UL600_SR600,400_.jpg"
},
{
  author: "Prince Harry, Duke of Sussex",
  title: "Spare",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81pHW0GJIlL._AC_UL600_SR600,400_.jpg",
}];


const newBooks = books.map((item) => {
  return (<Book img={item.img} author={item.author} title={item.title} />)
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
