import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  )
}

export default App
