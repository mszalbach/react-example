import React from 'react';
import uuid from 'uuid';
import Notes from '../notes';
import connect from '../../libs/connect';

import "./app.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                },
                {
                    id: uuid.v4(),
                    task: 'Sleep'
                }
            ]
        };

        //Bindings needed to access state when written as method. Could be easier with autobind-decorator
        this.addNote = this.addNote.bind(this);
    }

    render() {
        const {notes} = this.state;

        return (
            <div>
                {this.props.test}
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
        this.setState({notes: [...this.state.notes, {id: uuid.v4(), task: 'New task'}]});
    }

    deleteNote = (id, e) => {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateNoteEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if (note.id === id) {
                    note.editing = true;
                }

                return note;
            })
        });
    }
    editNote = (id, task) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if (note.id === id) {
                    note.editing = false;
                    note.task = task;
                }

                return note;
            })
        });
    }
}

export default connect(() => ({
    test: 'test'
}))(App)