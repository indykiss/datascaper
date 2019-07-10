

import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import fetchScapes from '../actions/scapeActions'

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resources from './Resources';
import ScapeForm from '../containers/ScapeForm';
import ScapeShow from '../containers/ScapeShow';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false, 
      scapes: []
    }
  }

  callAPI() {
    this.props.fetchScapes()
  }

// I am here, lets move down

  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navbar/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/scape/new' component={ScapeForm}/>
                <Route path='/scapes/:scapeID' component={ScapeShow}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/resources' component={Resources}/>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

//? ?    see_the_scape: state.stock_name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScapes: () => {
      dispatch(fetchScapes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
