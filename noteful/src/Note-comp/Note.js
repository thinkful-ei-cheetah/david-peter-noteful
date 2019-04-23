import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';

export default function Note(props) {

    return (
        <div className="Note">
            <h2 className="NoteName">
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
           <div className='Note__dates'>
                {format(props.modified, 'Do MMM YYYY')}
            </div>
            <button className='Note__delete' type='button'> remove </button>
        </div>

    )
}
