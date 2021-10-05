import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Discover from './pages/Discover';
import Services from './pages/Services';
import Footer from './pages/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Navbar />
            <Homepage />
            <About />
            <Discover />
            <Services />
            <SignUp />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
