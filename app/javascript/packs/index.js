// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './index.css';
import App from '../components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import scapesReducer from './ScapeReducer';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

//const store = createStore(
//    scapeFormReducer,
//    applyMiddleware(thunk)
//)

const rootReducer = combineReducers({
    scapes: scapesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Router>
        <Route path = "/" component={App} />
    </Router>,

    document.body.appendChild(document.createElement('div')),
//    document.getElementById('root')
);

export default rootReducer 



// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }