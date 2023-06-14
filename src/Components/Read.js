import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router";

const Read = () => {

    const [data, setData]=useState([])
    const [price, setPrice]=useState("")
    const history = useNavigate()







    const handChange = (e) =>{
        e.preventDefault();
        console.log('click')
        axios.post("https://648784b6beba62972790c40f.mockapi.io/input",
        {
       
          price:price
        })
    
        .then(()=>{
          history('./readup')
        })
      }

function getdata(){
    axios.get("https://648784b6beba62972790c40f.mockapi.io/task-1")
    .then((res)=>{
        console.log(res.data);
        setData(res.data)
    })

}

useEffect(()=>{
    getdata();
},[data]);



  return (
    <div><table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">color</th>
        <th scope="col">size</th>
        <th scope="col">price</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>

    {data.map((eachdata)=>{
        return(
            <>
             <tbody>
     
     <tr>
       <th scope="row">{eachdata.id}</th>
       <td>{eachdata.color}</td>
       <td>{eachdata.size}</td>
       <td>    <input type='number' className="form-control" onChange={e=>setPrice(e.target.value)} placeholder='Enter Price' style={{width:"40%"}}/></td>
       <td>
       
                  <button className='btn btn-success' onClick={handChange} >Submit</button>
             </td>
                  <td><button className='btn btn-danger' >Delete</button></td>

     </tr>
   </tbody>
            </>
        )
    })}
   
  </table></div>
  )
}

export default Read