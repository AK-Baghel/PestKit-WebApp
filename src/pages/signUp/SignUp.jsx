import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [done, setDone] = useState(false)
    const [check, setCheck] = useState(false);


    const signUp = async () => {
        if (!name || !email || !password) {
            setCheck(true)
            return false;
        }
        const data = await fetch("http://localhost:5000/user-data", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setName("")
        setEmail("")
        setPassword("")
        setDone(true)

        setTimeout(() => {
            navigate('/login');
            setDone(false)
        }, 2000);

    }
    return (
        <div className="signUpContainer">
            <div className="signUpHeading">Sign Up {done ? "Completed!!!" : ""}</div>

            <input type="text" className="signUpInput" placeholder='Enter Your Full Name' value={name} onChange={(e) => { setName(e.target.value) }} />
            {check && !name && <p className='validation'>It's mandatory to fill Name</p>}

            <input type="email" className="signUpInput" placeholder='Enter Your Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            {check && !email && <p className='validation'>It's mandatory to fill Email</p>}

            <input type="password" className="signUpInput" placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            {check && !password && <p className='validation'>It's mandatory to fill Password</p>}

            <div className="signUpButton" onClick={signUp}>SignUp</div>
            <div className="already">Already have an account? <span className='blue' onClick={() => navigate("/login")}>Login</span></div>
        </div>
    )
}

export default SignUp