import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Header({title}) {

    return (
        <header className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="navbar navbar-dark navbar-expand-lg">
                            <Link to="/react-project" className="navbar-brand fw-bold">{title}</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#devroNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="devroNavbar">
                                <ul className="nav navbar-nav me-auto">
                                    <li className="nav-item"><NavLink to="/about" activeClassName= "isLinkActive" className="nav-link text-white">About</NavLink></li>
                                    <li className="nav-item"><NavLink to="/project" activeClassName= "isLinkActive" className="nav-link text-white">Project</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 text-end">
                        <ul className="ps-0 mb-0 list-style-none">
                            <li className="navbar-text"><a rel="noreferrer" className="text-decoration-none text-white" href="mailto:rohityadav9769@gmail.com" target="_blank"> Email : rohityadav9769@gmail.com</a></li>
                            <li className="navbar-text"><a rel="noreferrer" className="text-decoration-none text-white" href="tel:+919769950552">Phone : +91 9769950552/</a><a className="text-decoration-none text-white" href="tel:7021852672">7021852672</a></li>
                            <li className="navbar-text">
                                <a rel="noreferrer" className="text-white" href="https://www.linkedin.com/in/rohityv" target="-blank"><i class="bi-linkedin"></i></a>
                                <a rel="noreferrer" className="d-inline-block mx-3 text-white" href="https://www.twitter.com/rohi8_cz/" target="-blank"><i className="bi-twitter"></i></a>
                                <a rel="noreferrer" className="text-white" href="https://github.com/rohityv/react-project" target="-blank"><i className="bi-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

// Header.defaultProps = {    
//     title: 'default props'
// }