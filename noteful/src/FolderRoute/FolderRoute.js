import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function FolderRoute(props) {




    return (
      <div className="Main">
      {/* <Route exact path="/" component={Main-route} /> */}
        <header className="App-header">
        this is test app folder route:
        {props.match.params.name}
        </header>

        <FolderNav />
      
        <Note />

      </div>
    );
  }
  
  export default FolderRoute;