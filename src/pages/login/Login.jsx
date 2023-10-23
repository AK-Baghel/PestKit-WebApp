import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react';
import { Context } from '../../context/AppContext';
function Login() {

    const data=useContext(Context);
    console.log(data);

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [check, setCheck] = useState(false);


    const login = async () => {
        if (!email || !password) {
            setCheck(true)
            return false;
        }
        const data = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        setEmail("")
        setPassword("")
        setCheck(false)

        console.log(await data.json());

    }

    return (
        <div className="signUpContainer">
            <div className="signUpHeading">Login</div>

            <input type="email" className="signUpInput" placeholder='Enter Your Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            {check && !email && <p className='validation'>It's mandatory to fill Email</p>}

            <input type="password" className="signUpInput" placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            {check && !password && <p className='validation'>It's mandatory to fill Password</p>}

            <div className="signUpButton" onClick={login}>Login</div>

            <div className="already">Don't have an account? <span className='blue' onClick={() => navigate("/signUp")}>Sign Up</span></div>
        </div>
    )
}

export default Login