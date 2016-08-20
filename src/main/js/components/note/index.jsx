import React from 'react';
import Editable from '../editable';
import "./note.css";

export default ({
    children, task, editing,
    onClick = () => {},
    onEdit = () => {},
}) => (
    <div className="note" onClick={onClick}>
        <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={onEdit}/>
        {children}
    </div>
);