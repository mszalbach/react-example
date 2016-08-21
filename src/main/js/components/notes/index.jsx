import React from 'react';
import Note from '../note';
import "./notes.css";
import LaneActions from '../../actions/LaneActions';



export default ({
    notes,
    onNoteClick = () => {},
    onEdit = () => {},
    onDelete = () => {}
}) => (
    <ul className="notes">{notes.map((note) =>
        <li key={note.id}>
            <Note className="note"  note={note} onClick={onNoteClick.bind(null, note.id)}  onEdit={onEdit.bind(null, note.id)} onMove={LaneActions.move}>
                <button className="delete" onClick={onDelete.bind(null, note.id)}>x</button>
            </Note>
        </li>
    )}</ul>
)