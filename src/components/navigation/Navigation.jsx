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
                <span onClick={handleMenuOnClick}>Menu</span>
                <img src='/images/logo192.png' alt=""/>
            </header>
            {isOpen &&
                <nav>
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