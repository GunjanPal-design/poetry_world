import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/user/Dashboard")

      .then((response) => {
        setData(response.data);
      }).catch((err) => {
        console.log("error found", err)
      })
  }, []);


  const handleEdit = (id) => {

    navigate(`/update/${id}`)
  }
  return (

    <div>
      <header>
        <nav className="mx-auto flex p-6 bg-black">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-pink-600 flex font-bold text-2xl">

              <a href="#">PoetryWorld</a>
            </div>

            <div className="space-x-6 md:flex">
              <a href="#" className="text-pink-600 ">Home</a>
              <a href="#" className="text-pink-600 ">About</a>
              <a href="#" className="text-pink-600 ">Entries</a>
              <a href="#" className="text-pink-600 ">Category</a>
              <a href="#" className="text-pink-600 "></a>
            </div>
            <div>
              <button className="rounded-md bg-pink-600 text-white p-3 px-4">Search</button>
            </div>
          </div>
        </nav>
      </header>

      <div className=' p-6 m-7 space-x-7 '>
        <h2 className='text-center text-3xl font-bold mb-3'>PARTICIPANTS</h2>
        {Data.map((user) => (
          <div >
            <div key={user._id} className=' p-7 w-full border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
              <div className='space-y-5'>
                <h2 >Email:{user.Email} </h2>
                <p>Password:{user.Password}</p>

                <button className='px-4 py-3 text-sm font-medium text-center text-white bg-pink-600 rounded-lg ' onClick={() => handleEdit(user._id)}>View</button>
              </div>

            </div>


          </div>

        ))}


      </div>

    </div >

  )
}
export default Dashboard;
