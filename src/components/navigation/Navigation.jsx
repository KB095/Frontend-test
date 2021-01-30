import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuOnClick = (e) => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <header className='header'>
                <span className='menuIcon-span' onClick={handleMenuOnClick}>
                    <img
                        className={isOpen ? 'menuIcon menuIcon-open' : 'menuIcon  menuIcon-close'}
                        src="/images/menu.svg"
                        alt=""
                    />
                </span>
                
                <img className='logo' src='/images/logo.png' alt=""/>
            </header>
            <nav className={isOpen ? 'navigation navigation-open' : 'navigation'}>
                <h1>Menü</h1>
                <ul>
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/price-tag'>PriceTag</Link></li>
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/'>Home</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navigation