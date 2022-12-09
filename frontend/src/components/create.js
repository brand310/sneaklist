import React from 'react';
import { useState } from 'react';
import './create.css';
// import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('Adidas');
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const shoe = {name, brand, size, image, comment};
    fetch('http://localhost:3005/sneakers', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(shoe)
    }).then(() => {
      console.log('New shoe has been added')
    })

    // navigate('/');

  }


  return (
    <div className='create-page'>
      
      <h1 className='createName'>ADD A SHOE</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label for="name">Shoe Name</label><br/>
        <input type="text" value={name} name="name" required onChange={(e) => setName(e.target.value)}></input><br/>
        <label for="brand">Shoe Brand</label><br/>
        <select value={brand} name="brand" onChange={(e) => setBrand(e.target.value)}>
          <option value="adidas">Adidas</option>
          <option value="nike">Nike</option>
          <option value="puma">Puma</option>
          <option value="vans">Vans</option>
          <option value="converse">Converse</option>
          <option value="reebok">Reebok</option>
          <option value="newBalance">New Balance</option>
          <option value="jordans">Jordans</option>
        </select><br/>
        <label for="size">Shoes Size</label><br/>
        <input type="number" value={size} name="size" min="1" max="18" step="0.5" required onChange={(e) => setSize(e.target.value)}></input><br/>
        <label for="image">Image</label><br/>
        <input type="text" value={image} name="image" required onChange={(e) => setImage(e.target.value)}></input><br/>
        <label for="comment">Add Comment</label><br/>
        <input type="text" value={comment} name="comment" required onChange={(e) => setComment(e.target.value)}/><br/>
        <button className='submitBtn'>Add Shoe</button>
      </form>
    </div>
  )
}

export default Create