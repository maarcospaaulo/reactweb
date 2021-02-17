import { React } from 'react'

import './style.css'

const Button = ({text}) => {
    return (
        <a className="btn" href="/">{text}</a>
    )
}

export default Button;