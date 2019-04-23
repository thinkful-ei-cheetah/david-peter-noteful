import React, { Component } from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import MainRoute from '../MainRoute/MainRoute';
import FolderRoute from '../FolderRoute/FolderRoute';
import NoteRoute from '../NoteRoute/NoteRoute';
import NotFound from '../NotFound/NotFound'

import DummyStore from '../DummyStore';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
          folders:DummyStore.folders,
          notes:DummyStore.notes,
          selected: {
            folder: 'test',
            note: ''
          }
    }
  }

  

render() {

  return (  <Switch>
      <Route exact path="/" render={({match}) =>  <MainRoute match={match} data={this.state}/>} 
      
      />

  <Route exact path="/folder/:name" render={({match}) =>  <FolderRoute match={match} data={this.state} />} />

      <Route exact path="/note" component={NoteRoute} />

      
      <Route component={NotFound} />
    </Switch>
  );
}
}

export default App;
