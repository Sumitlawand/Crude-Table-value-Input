import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'

const Readup = () => {

    const [data, setData]=useState([])
    const [dataup, setDataup]=useState([])


function getdata(){
    axios.get("https://648784b6beba62972790c40f.mockapi.io/task-1")
    .then((res)=>{
        console.log(res.data);
        setData(res.data)
    })

}

function getdata(){
    axios.get("https://648784b6beba62972790c40f.mockapi.io/input")
    .then((res)=>{
        console.log(res.data);
        setDataup(res.data)
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
       <td> {eachdata.price}</td>
       <td>
       
                  <button className='btn btn-success' >Edit</button>
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

export default Readup