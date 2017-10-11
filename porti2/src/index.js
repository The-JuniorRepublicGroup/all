import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './index.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


ReactDOM.render(
    
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Footer}/>
        </div>
        
    </Router>
    
,

    document.getElementById('root'));

