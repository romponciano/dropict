import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import IASelect from './components/IASelect'
import Sobre from './components/Sobre'
import Termos from './components/Termos'

import { StudentConsumer } from './context'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/select-student' component={Inicio} />
        <Route exact path='/sobre' component={Sobre} />
        <Route exact path='/termos' component={Termos} />
        <StudentConsumer>
          {(state) => {
            return (
              <Route exact path='/'
                render={(props) => <IASelect {...props} selected={state.selectedIA} />}
              />
            )
          }}
        </StudentConsumer>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
