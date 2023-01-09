import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate, useLocation} from 'react-router-dom';

function Update() {
  //states and start as empty
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  //navigate
  const navigate = useNavigate();
  const location = useLocation();
  const idParam = location.pathname.split('/');

  //on change function that will setBook with the info provided
  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //onClick event to post the book created to our backend
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8080/books/'+idParam, userInput)
      navigate('/')
    } catch(err) {
      console.log(err)
    }

  };
  //console.log(userInput);
  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
      className="form__input"
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
      className="form__input"

        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
      className="form__input"

        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
      className="form__input"

        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button className="form__btn" onClick={handleClick}>Add</button>
    </div>
  );
}

export default Update;

