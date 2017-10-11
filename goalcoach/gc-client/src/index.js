import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
)