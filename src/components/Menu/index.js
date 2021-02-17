import { React } from 'react';

import './style.css'

function MenuLinks() {
    return (
        <ul className="list">
            <li className="list-itens">
                <a className="list-item" href='/'>About</a>
                <a className="list-item" href='/'>Experience</a>
                <a className="list-item" href='/'>Work</a>
                <a className="list-item" href='/'>Contact</a>
            </li>
        </ul>
    );
}

export default MenuLinks;