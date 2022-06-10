import React from 'react'
import './Navbar.css'
import Logo from '../../../assets/logo-white.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <Link exact to='/'><img src={Logo} alt="" className='navbar__brand' /></Link>
            </div>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link exact to='/' className="navigation__link"><span>01</span>Our home</Link></li>
                        <li className="navigation__item"><Link exact to='/' className="navigation__link"><span>02</span>explore menu</Link></li>
                        <li className="navigation__item"><Link exact to='/' className="navigation__link"><span>03</span>testimonials</Link></li>
                        <li className="navigation__item"><Link exact to='/' className="navigation__link"><span>04</span>about us</Link></li>
                        <li className="navigation__item"><Link exact to='/' className="navigation__link"><span>05</span>contact us</Link></li>
                    </ul>
                </nav>

            </div>
        </nav>
        </>
    )
}

export default Navbar