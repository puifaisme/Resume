import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/homePage'
import aboutMe from './Components/aboutMe'
import portfolio from './Components/portfolio'
import skills from './Components/skills'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root")
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutMe" component={aboutMe} />
    <Route path="/portfolio" component={portfolio} />
    <Route path="/skills" component={skills} />
  </Switch>
  </BrowserRouter>, rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
reportWebVitals();
