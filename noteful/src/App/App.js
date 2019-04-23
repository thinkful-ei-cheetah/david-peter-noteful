import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import MainRoute from '../MainRoute/MainRoute';
import FolderRoute from '../FolderRoute/FolderRoute';
import NoteRoute from '../NoteRoute/NoteRoute';
import NotFound from '../NotFound/NotFound'

import DummyStore from '../DummyStore';




function App() {

  return (  
    <Switch>
      <Route exact path="/" component={MainRoute} />
      <Route exact path="/folder/:name" component={FolderRoute} />
      <Route exact path="/note" component={NoteRoute} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
