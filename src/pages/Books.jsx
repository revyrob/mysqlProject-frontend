import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    //fun the async function to get data back from my backend
    fetchAllBooks();
  }, []);
 console.log(books)
  return (
    <div>
      <h1>Kayle Book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title}/>}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
          <Link to="/add">
      <button>Add new Book</button>
      </Link>
    </div>
  );
}

export default Books;
