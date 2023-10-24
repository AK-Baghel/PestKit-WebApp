import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Context } from '../../context/AppContext'

function PrivateComponent() {

    const [result, setResult] = useState("")

    const {data}=useContext(Context);

    const userData = async () => {
        const data = await fetch("http://localhost:5000/userData");
        setResult(await data.json());
    }

    useEffect(() => {
        userData();
    }, [])

    return (
        data ? <Outlet /> : ""
    )
}

export default PrivateComponent