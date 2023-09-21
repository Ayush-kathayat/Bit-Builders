import { useState, useEffect } from 'react';
import './Header.css'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { IoReorderThreeOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><a href="index.html">FutureJourney.ai</a></h1>

                <nav id="navbar" className="navbar">
                    <ul>
                        {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
                        {/* {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
                        {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                        {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>  */}
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span>
                            <AiOutlineDown />
                        </a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span>
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
                        </li> */}
                        {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                    </ul>
                    {isMobile && <IoReorderThreeOutline />}

                    <Link to="/auth">
                        <button type="button" class="btn btn-outline-primary">Sign in</button>
                    </Link>

                    {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                </nav>

            </div>
        </header>
    )
}

export default Header