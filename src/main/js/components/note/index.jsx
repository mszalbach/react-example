import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';


import Editable from '../editable';
import "./note.css";
import ItemTypes from '../../constants/itemTypes';


const Note = ({
    connectDragSource, connectDropTarget, children, note, oMove, id, isDragging,
    isOver,
    onClick = () => {},
    onEdit = () => {},
    ...props
}) => {

    const dragSource = note.editing ? a => a : connectDragSource;
    return compose(dragSource, connectDropTarget)(
        <div style={{
            opacity: isDragging || isOver ? 0 : 1
        }} className="note" onClick={onClick}>
            <Editable
                className="editable"
                editing={note.editing}
                value={note.task}
                onEdit={onEdit}/>
            {children}
        </div>
    );
};

const noteSource = {
    beginDrag(props) {
        return {
            id: props.note.id
        };
    }
};

const noteTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.note.id;
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;

        if(sourceId !== targetId) {
            targetProps.onMove({sourceId, targetId});
        }
    }
};

export default compose(
    DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })),
    DropTarget(ItemTypes.NOTE, noteTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }))

)(Note)