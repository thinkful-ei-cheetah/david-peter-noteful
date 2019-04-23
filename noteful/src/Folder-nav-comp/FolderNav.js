import React from 'react';
import Folder from '../Folder-comp/Folder';


function FolderNav(props) {

let Folders = props.folders.map( folder => {

   return ( <Folder id={folder.id} name={folder.name}/> 
)

})

    return ( <ul>
        {Folders}
    </ul>

    )
}

export default FolderNav;