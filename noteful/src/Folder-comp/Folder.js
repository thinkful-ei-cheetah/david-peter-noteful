import React from 'react';

import { NavLink } from 'react-router-dom'

function Folder(props) {
    let LinkUrl = `/folder/${props.name}`

    return (<li>
        <NavLink key={props.id} to={LinkUrl} className='folder' id={props.id}>{props.name}</NavLink>
        </li>

    )
}

export default Folder;