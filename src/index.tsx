import React from 'react';
import ReactDOM from 'react-dom';
import { WhoWeAre, WhereWeWork, WhatWeDo, ContactUS} from './components'; //NEW_ADDITION
import reportWebVitals from './reportWebVitals';

import './styles.css'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <WhoWeAre title={'NZA'}/> {/* NEW_ADDITION*/}
        </Route>
        <Route exact path='/wherewework' component={WhereWeWork}/>
        <Route exact path='/whatwedo' component={WhatWeDo}/>
        <Route exact path='/contact' component={ContactUS}/>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
