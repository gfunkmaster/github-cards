import React, { useState } from 'react'

const Form = (props:any) => {


  
    
const [username, setUsername] = useState('')  

 
   const handleChange = (event:any) => {
    setUsername(event.target.value);
  }




const HandleSubmit = async (event: any) => {
  event.preventDefault();
  
       await fetch(`https://api.github.com/users/${username}`)
         .then((data) => data.json())
         .then((data) => {
           if(data.message) {
               console.log(data.message)
           } else {
               setUsername(data);
               console.log(data);
                
           }
         })
       
    
   
     props.onSubmit(username);
  
};

 //value={this.state.value} onChange={this.handleChange}


    return (
      <>
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            value={username}
            onChange={handleChange}
            required
          />
          <button>Add Card</button>
        </form>
      </>
    );
}

export default Form
 