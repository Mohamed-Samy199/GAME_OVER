import React, { Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png'
import './Navbars.modules.scss'

const Navbars = ({ userData, logout }) => {
    return (
        <div>
            <Navbar expand="lg" className={`navbar navbar-expand-lg shadow-lg`}>
                <Container>
                    <Navbar.Brand>
                        <NavLink className="navbar-brand" href="/">
                            <img className='w-25' src={logo} alt='img' />
                            <span className='h-3 text-light'>game over</span>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {userData ?
                            (<Nav className="me-auto">
                                <Nav.Link>
                                    <NavLink className="nav-link" aria-current="page" to=''>Home</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="nav-link" to='all'>All</NavLink>
                                </Nav.Link>
                                <NavDropdown title="Platform" className="nav-link" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><NavLink className="dropdown-item nav-link" to="movies">Movies</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className="dropdown-item nav-link" to="tvshows">Tvshows</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className="dropdown-item nav-link" to="people">People</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Categories" className="nav-link" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><NavLink className="dropdown-item" to="/popular">Popular</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className="dropdown-item" to="/theater">Theatres</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className="dropdown-item" to="/drama">Drama</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className="dropdown-item" to="/kids">Kids</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>
                                    <NavLink className="nav-link" to='search'>Search</NavLink>
                                </Nav.Link>
                            </Nav>) :
                            ("")}
                        <Nav className="me-auto">
                            {userData ?
                                (<Nav.Link>
                                    <NavLink className="nav-link text-primary border border-1 rounded-2 border-primary ms-1" onClick={logout} to='login'>Log Out</NavLink>
                                </Nav.Link>)
                                :
                                (
                                    <Fragment>
                                        <Nav.Link>
                                            <NavLink className="nav-link" to="login">Login</NavLink>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <NavLink className="nav-link text-primary border border-1 rounded-2 border-primary" to="register">Join Free</NavLink>
                                        </Nav.Link>
                                    </Fragment>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars
