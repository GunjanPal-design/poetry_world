import React, { useState } from 'react'
import './Signup.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!Email || !Password) {
            alert("All fields are required");
            return;
        }

        axios
            .post("http://localhost:3000/user/Login", { Email, Password })
            .then((result) => {
                console.log(result);
                // Save the token in localStorage
                localStorage.setItem("token", result.data.token);
                alert('Login successful!');
                navigate("/Dashboard");
            })
            .catch((err) => {
                console.error('Error:', err);
                alert('Login failed: ' + (err.response ? err.response.data.message : 'Unknown error'));
            });
    };

    return (
        <div className="bg-[url(./assets/poet.jpg)] bg-no-repeat bg-cover min-h-screen">
            <div className='container mx-auto p-6'>
                <div className='w-full p-3'>
                    <h2 className='text-pink-600 font-bold font-stretch-50% text-3xl'>PoetryWorld</h2>
                </div>
                <div className="max-w-md mx-auto bg-pink-100 p-8 border border-gray-300 rounded-lg shadow-lg mt-28">
                    <h2 className='text-center p-4 font-bold'>Login</h2>
                    <form className='mx-auto space-y-6' onSubmit={onSubmit}>
                        <div className=''><label className="block ">Email:</label>
                            <input className="mt-1 block border border-gray-400 rounded w-full p-2" type="text" placeholder="Enter the email" onChange={e => setEmail(e.target.value)}></input></div>

                        <div className=''><label className="block">Password:</label>
                            <input className="mt-1 block w-full p-2 border border-gray-400 rounded" type="password" placeholder="Enter the password" onChange={e => setPassword(e.target.value)}></input></div>
                        <div className='' >
                            <button className=' w-full py-2 px-4 bg-pink-600 text-white rounded-md' >Login</button>
                        </div>
                    </form></div>
            </div>
        </div>

    )
}
export default Login;

