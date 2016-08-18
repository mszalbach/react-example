import React from 'react';
import Notes from '../notes';
import uuid from 'uuid';


export default class App extends React.Component {
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
                <button onClick={this.addNote}>+</button>
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

    deleteNote = (id, e)  => {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateNoteEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.editing = true;
                }

                return note;
            })
        });
    }
    editNote = (id, task) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.editing = false;
                    note.task = task;
                }

                return note;
            })
        });
    }
}