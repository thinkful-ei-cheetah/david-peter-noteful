import React, { Component } from 'react';
import Note from '../Note-comp/Note';
import { withRouter } from 'react-router-dom'
import './NoteRoute.css'

class NoteRoute extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  handleBackClick = (currentFolderId) => {
    return(
    this.props.history.push(`/folder/${currentFolderId}`)
    )
  }
  
  
  render() {
    
    let currentId = this.props.match.params.id;
    let data = this.props.data
    let filteredNotes = data.notes.filter(i => Object.values(i).includes(`${currentId}`) === true);
    let currentNote = filteredNotes[0];
    let filteredFolders = data.folders.filter(i => Object.values(i).includes(`${currentNote.folderId}`) === true)
    let currentFolder = filteredFolders[0];

    // function handleBackClick(){
    //   this.props.history.push(`/folder/${currentFolder.id}`)
    // }
    console.log(currentFolder)
    
    
    return (
      <div className="NoteRoute">
        <div className='side-bar'>
          Side bar goes here
        <button className="NoteBackButton" type="button" onClick={() => this.handleBackClick(currentFolder.name)}>Back</button>
          {currentFolder.name}
        </div>
        <div className='current-note'>
          <Note
            id={currentNote.id}
            name={currentNote.name}
            modified={currentNote.modified}
            folderId={currentNote.folderId}
            content={currentNote.content}
            />
          <div>{currentNote.content}</div>
        </div>


      </div>
    );
  }
}
export default withRouter(NoteRoute);







