import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className = 'bg-info text-dark fw-bold py-3'>
            <div className="container">
                <div className="copyright text-center">
                    <span>Copyrights &copy; 2021 || </span>
                    <Link to="/" className="text-dark text-decoration-none"> Devro Info. || </Link>
                    <Link to="/about" className="text-dark text-decoration-none"> about || </Link>
                    <Link to="/project" className="text-dark text-decoration-none"> project </Link>
                </div>
            </div>
        </footer>
    )
}
