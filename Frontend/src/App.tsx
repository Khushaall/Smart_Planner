
import { useState } from 'react'
import './App.css'
import { BACKEND_URL } from './config/credentials';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [pass, setPass] = useState("");


  const handleSubmit = () =>{

    axios.post(`${BACKEND_URL}`,{
      name:name,
      email:email,
      pass:pass
    })
  }

  return (
    <>
    <div style={{display:"flex", gap:"4"}}>
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder="name"></input>
      <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder="email"></input>
      <input type='text' onChange={(e)=>setPass(e.target.value)} placeholder="password"></input>

      <button onClick={handleSubmit}>Submit</button>

    </div>
    </>
  )
}

export default App
