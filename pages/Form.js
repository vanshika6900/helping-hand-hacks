import React, { useState } from 'react'
import { onValue, ref, set } from "firebase/database";
import { db } from '../firebase'
import { uid } from 'uid';
//import "./styles.css";

function Form() {
  // const [walletId, setWalletId] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const petitionId = uid();
    let walletId = window.localStorage.getItem('walletId')
    set(ref(db, `${walletId}/${petitionId}/`), {
      title,
      desc,
      walletId,
      petitionId,
      count: 0,
    });
    alert(`uploaded in ${walletId}`);
    setTitle("");
    setDesc("");
  }

  return (
    //html
    <div class="login-box">
      <h2>Create Petition</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" value={title} onChange={e => setTitle(e.target.value)}
          ></input>
          <label>Petition Name:</label>
        </div>
        <div class="user-box">
          <input type="text" name="" value={desc} onChange={e => setDesc(e.target.value)}></input>
          <label>Petition Description:</label>
        </div>
        <span className="aButton"  onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create Petition
        </span>
      </form>
    </div>


  )
}

export default Form