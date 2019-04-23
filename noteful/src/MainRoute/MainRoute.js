import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function MainRoute(props) {

  let data=props.data

    return (
      <div className="Main">
      {/* <Route exact path="/" component={Main-route} /> */}
        <header className="App-header">
        this is test app main-route
        {data.selected.folder}
        </header>

        <FolderNav folders={data.folders}/>

        <Note />


      </div>
    );
  }
  
  export default MainRoute;