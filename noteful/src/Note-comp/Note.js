import React from 'react';

function Note(props) {

    return ( <div>
        {props.name}
        {props.modified}
    </div>

    )
}

export default Note;