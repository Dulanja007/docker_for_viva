import React from 'react'
import { Link } from 'react-router-dom'

export default function
    () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/">
                    Medicine Management System</Link>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    ria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/adduser">Add</Link>
                </div>
            </nav>
        </div>
    )
}
