import React from 'react';
import Folder from '../Folder-comp/Folder';
import DummyStore from '../DummyStore';


function FolderNav() {

let Folders = DummyStore.folders.map( folder => {

   return ( <Folder id={folder.id} name={folder.name}/> 
)

})

    return ( <ul>
        {Folders}
    </ul>

    )
}

export default FolderNav;