import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Books() {
  //check 33:58 on video
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

  const handleDelete = async(id)=> {
    try{
      await axios.delete("http://localhost:8080/books/" +id)
      //refresh page but in future use redux or another management tool
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
 console.log(books)
  return (
    <div>
      <h1>Kayle Book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt=""/>}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <div className="book__btn">
            <button className="book__btn--delete" onClick={()=>handleDelete(book.id)}>Delete</button>
            <button className="book__btn--update"><Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
          </div>
        ))}

      </div>
          <Link to="/add">
      <button className="btn__add">Add new Book</button>
      </Link>
    </div>
  );
}

export default Books;
