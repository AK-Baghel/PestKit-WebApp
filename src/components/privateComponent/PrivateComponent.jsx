import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function PrivateComponent() {

    const [result, setResult] = useState("")

    // const data=async()=>{
    //     const data=await fetch("http://localhost:5000/formData");
    //     const result=await data.json();
    //     console.log("asdasdsd",result);
    // }

    const userData = async () => {
        const data = await fetch("http://localhost:5000/userData");
        setResult(await data.json());
    }

    useEffect(() => {
        userData();
    }, [])

    return (
        !setResult ? <Outlet /> : ""
    )
}

export default PrivateComponent