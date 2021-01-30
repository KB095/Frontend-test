import React, {useState} from 'react'

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
            {isOpen &&
                <nav className='navigation'>
                    <ul>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                    </ul>
                </nav>
            }
        </React.Fragment>
    )
}

export default Navigation