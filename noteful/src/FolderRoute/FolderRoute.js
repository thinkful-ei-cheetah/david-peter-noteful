import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function FolderRoute() {

    return (
      <div className="Main">
      {/* <Route exact path="/" component={Main-route} /> */}
        <header className="App-header">
        this is test app folder route
        </header>

        <FolderNav />

        <Note />


      </div>
    );
  }
  
  export default FolderRoute;