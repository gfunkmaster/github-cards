import React, { useEffect, useState } from 'react'

import axios from 'axios';

const Form = () => {
    
const [username, setUsername] = useState('')  
const [repo, setRepo] = useState([]);
 
 
const HandleSubmit = async (event: any) => {
  event.preventDefault();
  
   const resp = await fetch(`https://api.github.com/users/${username}`)
     .then((res:any) => res.json())
     .then((data:any)=> console.log(data))

    
   //onSubmit(resp.data);
   //this.setState({ userName: "" });
  
};



    return (
      <>
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            value={username}
            onChange={event => setUsername(event.target.value ) }
            required
          />
          <button>Add Card</button>
        </form>
      </>
    );
}

export default Form
 