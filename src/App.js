import { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from './Components/Navbar-1/NavBar';

import Home from './Components/page/Home';
import About from './Components/page/About';


function App() {
  return (
        <Fragment>
          <Router>
            <Navbar />
            <Switch>
              <div className="page">
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/About" component = {About} />
                
              </div>
            </Switch>
          </Router>
        </Fragment>
  );
}

export default App;