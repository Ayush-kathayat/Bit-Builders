import React from 'react'
import './Header.css'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { IoReorderThreeOutline } from 'react-icons/io5'
function Header() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><a href="index.html">eNno</a></h1>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span>
                            <AiOutlineDown />
                        </a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                    <AiOutlineRight />
                                </a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                    </ul>
                    <IoReorderThreeOutline />
                    {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                </nav>

            </div>
        </header>
    )
}

export default Header