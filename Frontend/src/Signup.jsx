import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const Navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();



        if (!Name || !Email || !Password) {
            alert("All fields are required")
            return
        }


        axios
            .post("http://localhost:3000/user/Signup", { Name, Email, Password })
            .then((result) => {
                console.log(result);
                alert('Registration successful!');
                Navigate("/Login")



            })
            .catch((err) => {
                console.error('error', err);

            });


    }

    return (
        <div className="bg-[url(./assets/poet.jpg)] bg-no-repeat bg-cover min-h-screen">
            <div className="container mx-auto ">
                <div className='w-full p-3'>
                    <h2 className='text-pink-600 font-bold font-stretch-50% text-3xl'>PoetryWorld</h2>
                </div>

                <div className="max-w-md mt-24 mx-auto bg-pink-100 p-8 border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="mx-auto text-center font-bold p-4 ">Registration</h2>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username:</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                                onChange={(e) => setName(e.target.value)}
                                value={Name}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                                onChange={(e) => setEmail(e.target.value)}
                                value={Email}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                                onChange={(e) => setPassword(e.target.value)}
                                value={Password}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-pink-600 text-white rounded-md"
                            >
                                Register
                            </button>

                        </div>

                        <h3 className="text-center">Already have an account? <a className="text-pink-600" href="/login">Login</a></h3>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
{/* <div >
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
</div> */}