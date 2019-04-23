import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function MainRoute() {

    return (
      <div className="Main">
      {/* <Route exact path="/" component={Main-route} /> */}
        <header className="App-header">
        this is test app main-route
        </header>

        <FolderNav />

        <Note />


      </div>
    );
  }
  
  export default MainRoute;