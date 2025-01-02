import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate= useNavigate();
    
    const {id}=useParams()

    const [user, setUser] = useState({
        name: "",
        quantity: ""
    })

    const { name, quantity } = user
    //e = event
    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });

    };

    useEffect(()=>{
        loadUsers()
    },[])

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/");
    };

    const loadUsers = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-2'>Edit Medicine</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>
                                Name
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter name'
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            >
                            </input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Quantity" className='form-label'>
                                Quantity
                            </label>
                            <input
                                type={"number"}
                                className='form-control'
                                placeholder='Enter quantity'
                                name='quantity'
                                onChange={(e) => onInputChange(e)}
                            ></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
