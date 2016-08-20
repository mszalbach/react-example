import React from 'react';
import Note from '../note';
import "./notes.css";


export default ({
    notes,
    onNoteClick = () => {},
    onEdit = () => {},
    onDelete = () => {}
}) => (
    <ul className="notes">{notes.map(({id, editing, task}) =>
        <li key={id}>
            <Note editing={editing} task={task} className="note" onClick={onNoteClick.bind(null, id)}  onEdit={onEdit.bind(null, id)}>
                <button className="delete" onClick={onDelete.bind(null, id)}>x</button>
            </Note>
        </li>
    )}</ul>
)