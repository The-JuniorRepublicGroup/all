import React, { Component } from 'react';
import '../App.css';

import {
  Link
} from 'react-router-dom'


export default class Header extends Component {
    render(){
        return(
            <div className="page-header row text-center">
                <h1>Ralph <small>Learning Full Stack Development</small> </h1>
                <Link to="/about" className="col-md-3">Home</Link>
                <Link to="/projects" className="col-md-3">Projects</Link>
                <Link to="/contact"  className="col-md-3">Contact Me</Link>
            </div>
        )
    }
}