import React, { useState } from 'react'
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [close, setclose] = useState(false);

    function closenav() {
        setclose(!close)
    }

    return (
        <>

            {close &&
                <motion.div
                    initial={{ x: "50px", }}
                    transition={{ duration: 0.3 }}
                    animate={{ x: 0, }}
                    className='navbar-item-xs'>
                    <div className="closeDiv">
                        <IoClose onClick={closenav} />
                    </div>
                    <div className="nav-item-xs-div">

                        <h5 className='me-3'>Movies</h5>

                        <h5 className='me-3'>Web Series</h5>
                        <h5 className='me-3'>join our group</h5>
                    </div>
                </motion.div>
            }
            <div className='Navbar-main'>
                <div className="navbar-title me-5">
                    <Link to="/" className="link">
                        ZMovie
                    </Link>
                </div>
                <div className='navbar-item'>
                    <div className='me-3'>Movies</div>
                    <div className='me-3'>Web Series</div>
                    <div className='me-3'>join our group</div>
                </div>
                <div className="search-div">
                    <div className='search-warpper'>
                        <input type="text" className='search-input' placeholder='search' />
                        <IoSearch style={{ fontSize: "24px", color: "#274a6d" }} />
                    </div>
                </div>
                <div className='nav-menu'>
                    <FiMenu onClick={closenav} />
                </div>
            </div>
        </>
    )
}

export default Navbar