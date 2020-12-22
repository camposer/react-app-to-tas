/**
 * React app that uses constants and a simple react-router demo copied from here:
 * https://reactrouter.com/web/guides/quick-start
 */

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      Welcome, {window.appConstants.name}!
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        Simple demo for showing:
        <ul>
          <li>Alternate method for using constants across different environments</li>
          <li>Alternate method for enabling hash routes when using react-router</li>
        </ul>
      </p>
      <p>All configurations above rely on Cloud Foundry and NGINX Buildpack</p>
    </>
  );
}


