import './App.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  // const [price, setPrice]=useState("")
  const history = useNavigate()


  const handChange = (e) =>{
    e.preventDefault();
    console.log('click')
    axios.post("https://648784b6beba62972790c40f.mockapi.io/task-1",
    {
      color:color,
      size:size,
      // price:price
    })

    .then(()=>{
      history('./read')
    })
  }

  return (
    <div className='container' style={{marginTop:"50px",width:"50%"}}>
      <h1>Fill Your Information</h1>
      {/* <h1>{color}</h1>
      <h1>{size}</h1>
      <h1>{price}</h1> */}
     
    <form style={{marginTop:"50px"}}>

    <div className="mb-3">
    <label  className="form-label">Color</label>
      <select className="form-select" required="required" value={color} onChange={e=>setColor(e.target.value)}>
       <option value="">--Select--</option>
       <option value="Red">Red</option>
       <option value="Orange">Orange</option>
       <option value="Blue">Blue</option>
      </select>
     </div>

    <div className="mb-3">
    <label  className="form-label">Size</label>
      <select className="form-select" required="required" value={size} onChange={e=>setSize(e.target.value)}>
       <option value="">--Select--</option>
       <option value="100%">100%</option>
       <option value="25%">25%</option>
       <option value="50%">50%</option>
       <option value="100%">100%</option>
      </select>
     </div>

     {/* <div className="mb-3 mt-2">
      <label className="form-label"> Price</label>
    <input type='number' className="form-control" placeholder='Enter Price' required value={price} onChange={e =>setPrice(e.target.value)}/>
     </div> */}

 <button type="submit" className="btn btn-primary" onClick={handChange}>Submit</button>
  </form>
  </div>
  );
}

export default App;
