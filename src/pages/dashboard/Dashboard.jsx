import React, { useEffect } from 'react'
import "./style.css"
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa"

function Dashboard() {
  const [result, setResult] = useState([])

  useEffect(() => {
    getFormData();
  }, [])

  const deleteHandle = async (id) => {
    console.log(id);
    const result = await fetch(`http://localhost:5000/formData/${id}`, {
      method: "DELETE"
    })
    result = await result.json();
    if (result)
      getFormData();
  }

  const getFormData = async () => {
    const data = await fetch("http://localhost:5000/formData");
    const value = await data.json();
    console.log(value);
    setResult(value)
  }



  return (
    <div className="dashCont">

      <ul className="dashBoxs">
        <li className="dashBoxsRow dashNo">No.</li>
        <li className="dashBoxsRow dashName">Name</li>
        <li className="dashBoxsRow dashEmail">Email</li>
        <li className="dashBoxsRow dashSub">Subject</li>
        <li className="dashBoxsRow dashMessage">Message</li>
        <li className="dashBoxsRow dashNo">Delete</li>
      </ul>

      {
        result.map((item, index) => {
          return (
            <ul className="dashBox" key={item._id}>
              <li className="dashRow dashNo">{index + 1}</li>
              <li className="dashRow dashName">{item.name}</li>
              <li className="dashRow dashEmail">{item.email}</li>
              <li className="dashRow dashSub">{item.subject}</li>
              <li className="dashRow dashMessage">{item.message}</li>
              <li className="dashRow dashNo" onClick={() => { deleteHandle(item._id) }} style={{ cursor: "pointer" }}><FaTrashAlt style={{ color: "red" }} /></li>
            </ul>
          )
        })
      }

    </div >
  )
}

export default Dashboard