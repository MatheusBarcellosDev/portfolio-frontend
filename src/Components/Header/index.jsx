import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "../NavBar";
import { Nav } from './styled'
import { Link } from 'react-router-dom'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Nav>
            <div className="container-name">
                <div className="first-letter">M</div>
                <div className="main-name">
                    <Link to="/">
                        Matheus Barcellos
                    </Link>
                </div>
            </div>
            <GiHamburgerMenu
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                style={{cursor: 'pointer'}}
            />
            <NavBar show={isOpen}/>
        </Nav> 
        </>
    )
}

export default Header;