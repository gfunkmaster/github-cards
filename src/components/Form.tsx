import React, { useEffect, useState } from 'react'

import axios from 'axios';

const Form = (props:any) => {


  
    
const [username, setUsername] = useState('')  

 
  




const useHandleSubmit = async (event: any) => {
  event.preventDefault();
  
 /*   const resp = await axios.get(`https://api.github.com/users/${username}`)
   
    console.log(resp.data)
    props.onSubmit(resp.data)
   //onSubmit(resp.data);
   //this.setState({ userName: "" }); */

  /*  useEffect(() => {
     const fetchData = async () => {
       const result = await axios(`https://api.github.com/users/${username}`);

       props.onSubmit(result.data);
     };

     fetchData();
   }, []); 
 */

     
       await fetch(`https://api.github.com/users/${username}`)
         .then((data) => {
           return data.json();
         })
         .then((data) => {
           setUsername(data.data);
         })
         .catch((err) => {
           console.log(123123);
         });
    
   
     props.onSubmit(username);
  
};




    return (
      <>
        <form onSubmit={useHandleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <button>Add Card</button>
        </form>
      </>
    );
}

export default Form
 