import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import ListMenu from './components/list-menu';

import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Profile from './pages/profile';
import TopicSelector from './pages/selectTopics';


function App() {
  return (
    <Router>
      <Container>
        <ListMenu />
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/logout' component={Logout}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/selectTopics' component={TopicSelector}/>
      </Container>
    </Router>
  );
}

export default App;
