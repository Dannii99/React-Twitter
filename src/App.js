import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Start  from './pages/Start';
import LogIn  from './pages/LogIn';
import SignUp  from './pages/SignUp';
import Header  from './components/Header';


export default function App() {

  return (
    <Router>
     <Header/>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}