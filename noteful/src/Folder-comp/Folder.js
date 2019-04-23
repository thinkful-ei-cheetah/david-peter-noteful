import React from 'react';
import {Link} from 'react-router-dom';

function Folder(props) {
    let LinkUrl = `/folder/${props.id}`

    return (<li>
        <Link to={LinkUrl}>{props.name}</Link>
        </li>

    )
}

export default Folder;