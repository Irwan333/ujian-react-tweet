import React, {Component} from 'react';
import './App.css';
import Login from './Components/login';
import Profile from './Components/profile';
import {AuthContextProvider} from './Context/AuthContext';
import {BrowserRouter, Route} from 'react-router-dom';
import Protected from './Components/protected';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component{
  render(){
    return(
      <AuthContextProvider>
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Login} />
            <Protected path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    )
  }
}
export default App;
