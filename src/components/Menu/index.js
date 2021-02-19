import { React } from 'react';


import './style.css'

function MenuLinks() {
    return (
        <ul className="list">
            <li className="list-itens">
                <a className="list-item" href='/'>Github</a>
                <a className="list-item" href='/'>Linkedin</a>
                <a className="list-item" href='/'>Contact</a>
            </li>
        </ul>
    );
}

export default MenuLinks;