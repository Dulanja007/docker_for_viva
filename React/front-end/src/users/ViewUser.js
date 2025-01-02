import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        quantity:""
    });

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-2'>Medicine Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of Medicine ID:{user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name :</b>
                                    {user.name}

                                </li>
                                <li className='list-group-item'>
                                    <b>Quantity :</b>
                                    {user.quantity}

                                </li>

                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>
                    Back to Home page
                    </Link>
                </div>
            </div>
        </div>
    )
}
