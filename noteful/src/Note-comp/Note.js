import React from 'react';
import { Link } from 'react-router-dom'

export default function Note(props) {

    return (
        <div className="Note">
            <h2 className="NoteName">
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            {props.modified}
        </div>

    )
}
