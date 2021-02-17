import { React } from 'react'
import Button from '../Button'
import MenuLinks from '../Menu'

import './style.css'

function Header() {
    return (
        <header>
            <h1>Logo</h1>
            <MenuLinks />
            <Button text='Resume' />
        </header>
    );
}

export default Header;