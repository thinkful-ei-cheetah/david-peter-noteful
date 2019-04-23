import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function MainRoute(props) {

  let data = props.data


  let allNotes = data.notes.map(note => {
    return <Note
      id={note.id}
      name={note.name}
      modified={note.modified}
      folderId={note.folderId}
      content={note.content}
    />;
  })

  return (
    <div className="Main">
      <header className="App-header">
        {data.selected.folder}
      </header>
      <FolderNav folders={data.folders} />
      <div>
        {allNotes}
      </div>
    </div>
  );
}

export default MainRoute;