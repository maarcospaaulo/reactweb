import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'

import './style.css'

function Home() {

    return (
        <div className="home-page">
            <Container>
                <h1 className="apresentation">Hello, I'm Marcos Paulo Eugênio, graduated in Systems Analysis and Development 
                    from the Federal Institute of São Paulo and Front-end Developer at the largest 
                    Digital Marketing company in Latin America.</h1>

                <h2 className="skills">My skills:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Angular</li>
                    <li>Typescript</li>
                    <li>SEO</li>
                </ul>
                <Link to="/contact">Pagina de contato</Link>
            </Container>
        </div>
    );
}

export default Home;