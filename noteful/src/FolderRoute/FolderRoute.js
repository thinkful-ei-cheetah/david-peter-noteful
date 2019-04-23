import React from 'react';
import FolderNav from '../Folder-nav-comp/FolderNav';
import Note from '../Note-comp/Note'

function FolderRoute(props) {


  let data = props.data


  let allNotes = data.notes

  let filteredArray = data.folders.filter(i => Object.values(i).includes(`${props.match.params.name}`) === true);
  let currentFolder = filteredArray[0];

  let currentNotes = allNotes.map(note => {
    if (note.folderId === currentFolder.id) {
      return <Note
        id={note.id}
        name={note.name}
        modified={note.modified}
        folderId={note.folderId}
        content={note.content}
      />;
    }
  })


  console.log(currentFolder);
  console.log(currentNotes);

  return (
    <div className="Main">
      <header className="App-header">
        {props.match.params.name}
      </header>

      <FolderNav folders={data.folders} />

      {currentNotes}

    </div>
  );
}

export default FolderRoute;