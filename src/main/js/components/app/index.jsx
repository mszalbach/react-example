import React from 'react';
import uuid from 'uuid';
import Notes from '../notes';
import connect from '../../libs/connect';
import NoteActions from '../../actions/NoteActions';

import "./app.css";

class App extends React.Component {
    constructor(props) {
        super(props);


        //Bindings needed to access state when written as method. Could be easier with autobind-decorator
        this.addNote = this.addNote.bind(this);
    }

    render() {
        const {notes} = this.props;

        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
            </div>
        );
    }

    //written as normal method so binding is needed in constructor
    addNote() {
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New task'
        });
    }

    deleteNote = (id, e) => {
        e.stopPropagation();

        this.props.NoteActions.delete(id);
    };

    activateNoteEdit = (id) => {
        this.props.NoteActions.update({id, editing: true});
    };

    editNote = (id, task) => {
        this.props.NoteActions.update({id, task, editing: false});

    }
}

export default connect(({notes}) => ({
    notes
}), {
    NoteActions
})(App)