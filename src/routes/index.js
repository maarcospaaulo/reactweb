import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import ContactPage from '../pages/Contact';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;