// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './index.css';
import App from '../components/App';
//import { createStore, applyMiddleware } from 'redux'
//import { Provider } from 'react-redux'
//import thunk from 'redux-thunk';
//import scapeFormReducer from './scapeFormReducer';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

//const store = createStore(
//    scapeFormReducer,
//    applyMiddleware(thunk)
//)

ReactDOM.render(
    <Router>
        <Route path = "/" component={App} />
    </Router>,

    document.body.appendChild(document.createElement('div')),
//    document.getElementById('root')
);




// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }