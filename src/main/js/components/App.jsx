import React from 'react';
import Notes from './Notes';
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

        //Bindings needed to access state. Could be easier with autobind-decorator
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    render() {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes} onDelete={this.deleteNote} />
            </div>
        );
    }

    addNote() {
        this.setState({notes: [...this.state.notes, {id: uuid.v4(), task: 'New task'}]});
    }

    deleteNote(id, e)  {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }
}