import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Add() {
  //states and start as empty
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  //navigate
  const navigate = useNavigate()

  //on change function that will setBook with the info provided
  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //onClick event to post the book created to our backend
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/books', userInput)
      navigate('/')
    } catch(err) {
      console.log(err)
    }

  };
  console.log(userInput);
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Add;
