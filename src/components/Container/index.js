import { React } from 'react';

import './style.css'

const Container = ({ children }) => {
    return (
        <main className="app-container">
            {children}
        </main>
    );
}

export default Container;