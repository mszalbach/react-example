import React from 'react';
import Editable from '../editable';
import "./note.css";

export default ({
    children, note,
    onClick = () => {},
    onEdit = () => {},
}) => (
    <div className="note" onClick={onClick}>
        <Editable
            className="editable"
            editing={note.editing}
            value={note.task}
            onEdit={onEdit}/>
        {children}
    </div>
);