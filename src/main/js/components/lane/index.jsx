import React from 'react';
import connect from '../../libs/connect';
import NoteActions from '../../actions/NoteActions';
import LaneActions from '../../actions/LaneActions';
import LaneHeader from './LaneHeader';
import Notes from '../notes';

import './lane.css';

const Lane = ({
    lane, notes, LaneActions, NoteActions, ...props
}) => {
    const editNote = (id, task) => {
        NoteActions.update({id, task, editing: false});
    };

    const deleteNote = (noteId, e) => {
        e.stopPropagation();

        LaneActions.detachFromLane({
            laneId: lane.id,
            noteId
        });

        NoteActions.delete(noteId);
    };
    const activateNoteEdit = id => {
        NoteActions.update({id, editing: true});
    };

    return (
        <div {...props}>
            <LaneHeader lane={lane} />
            <Notes
                notes={selectNotesByIds(notes, lane.notes)}
                onNoteClick={activateNoteEdit}
                onEdit={editNote}
                onDelete={deleteNote} />
        </div>
    );
};

function selectNotesByIds(allNotes, noteIds = []) {
    return noteIds.map(id => allNotes.find(note => note.id === id));
}

export default connect(
    ({notes}) => ({
        notes
    }), {
        NoteActions,
        LaneActions
    }
)(Lane)