import React from 'react';
import Note from '../Note-comp/Note'

function NoteRoute() {

    return (
      <div className="NoteRoute">
      {/* <Route exact path="/" component={Main-route} /> */}
        <header className="App-header">
        this is test Note route
        </header>



        <Note />


      </div>
    );
  }

export default NoteRoute;