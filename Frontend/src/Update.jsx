import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const [data, setData] = useState({ Email: '' })  // initializing Email as an empty string
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/user/profile/${id}`)
            .then((response) => {
                setData(response.data);  // assuming the API returns the data directly in response.data
            })
            .catch((err) => console.log(err));
    }, [id]);



    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // Handle form submit (update user)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/user/Update/${id}`, data)
            .then((response) => {
                console.log("Response", response.data);
                alert("Update successful");
                navigate("/Dashboard");
            })
            .catch((err) => {
                console.log(err, "error");
                alert("Failed to update");
            })
    }


    //Handle delete user
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user");
        if (!confirmDelete) return;
        try {
            const response = await axios.delete(`http://localhost:3000/user/delete/${id}`)
            console.log("User deleted", response.data)
            alert("user deleted successfully");
            navigate("/Dashboard")


        } catch (err) {
            console.error("Error deleting user", err)
            alert("failed to delete user")
        }
    }

    return (
        <div>
            <div className="max-w-md mx-auto bg-pink-100 p-8 border border-gray-300 rounded-lg shadow-lg mt-28">
                <h2 className='text-center p-4 font-bold'>Update</h2>
                <form className='mx-auto space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <label className="block">Email:</label>
                        <input
                            className="mt-1 block border border-gray-400 rounded w-full p-2"
                            type="email"
                            name="Email"   // Added name="Email" here
                            value={data.Email}  // Using data.Email instead of data.user?.Email
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button className='w-full py-2 px-4 bg-pink-600 text-white rounded-md'>
                            Update
                        </button>
                    </div>
                    <div>
                        <button className='w-full py-2 px-4 bg-pink-600 text-white rounded-md' type="button" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update;
