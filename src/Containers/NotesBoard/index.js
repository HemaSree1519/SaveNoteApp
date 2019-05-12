import React, {Component} from "react";
import "./style.css"
import {CardColumns, Input} from "reactstrap";
import {getUser} from "../../Session/UserSession";
import {createNote, deleteNote, getAllNotesOfUser, updateNote} from "../../RestService/Notes";
import {formNoteDetails, formUpdatedNote} from "./service";
import {editNoteView} from "./views/EditeNote";
import {noteView} from "./views/Note";
import {writeNoteView} from "./views/WriteNote";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            message: "Get your note saved with Save Note app",
            isEditing: false,
            isWritingNote: false,
            editingNote: '',
            editingNoteTitle: '',
            editingNoteContent: '',
            writingNoteTitle: '',
            writingNoteContent: ''
        }
    }

    componentDidMount() {
        this.getNotes().then()
    }

    getNotes = async () => {
        const email = getUser();
        console.log(email);
        await getAllNotesOfUser(email).then((listOfNotes) => {
            this.setState({notes: listOfNotes})
        });
    };

    setEditState = (note) => {
        this.setState(prevState => ({
            isEditingNote: !prevState.isEditingNote,
            editingNote: note !== '' ? note : [],
            editingNoteContent: note !== '' ? note["content"] : '',
            editingNoteTitle: note !== '' ? note['title'] : ''
        }))
    };
    onDelete = () => {
        deleteNote(this.state.editingNote["email"], this.state.editingNote["id"]).then((reponse) => {
            if (reponse === 200) {
                this.getNotes().then()
            }
        });
        this.setEditState('')
    };
    onWriteToggle = () => {
        if (getUser()) {
            this.setState({isWritingNote: !this.state.isWritingNote, writingNoteTitle: '', writingNoteContent: ''})
        }
        else this.setState({message: "Please loggin to add note"})
    };
    onWriteNoteTitle = (writingNoteTitle) => {
        this.setState({writingNoteTitle: writingNoteTitle.target.value})
    };
    onWriteNoteContent = (writeNoteContent) => {
        this.setState({writingNoteContent: writeNoteContent.target.value})
    };
    onSaveNewNote = () => {
        const note = formNoteDetails(this.state.writingNoteTitle, this.state.writingNoteContent);
        createNote(note).then((response) => {
            if (response === 200) {
                this.getNotes().then();
                this.onWriteToggle();
            }
        })
    };
    onEditNoteContent = (editedContent) => {
        this.setState({editingNoteContent: editedContent.target.value})
    };

    onEditNoteTitle = (editedTitle) => {
        this.setState({editingNoteTitle: editedTitle.target.value})
    };
    onUpdateNote = () => {
        const updatedNote = formUpdatedNote(this.state.editingNote, this.state.editingNoteTitle, this.state.editingNoteContent);
        updateNote(this.state.editingNote["id"], updatedNote).then((repsonse) => {
            if (repsonse === 200) {
                this.getNotes().then()
            }
        });
        this.setEditState('')
    };

    render() {
        const props = {
            isEditingNote: this.state.isEditingNote,
            editingNote: this.state.editingNote,
            editingNoteTitle: this.state.editingNoteTitle,
            editingNoteContent: this.state.editingNoteContent,
            setEditState: this.setEditState,
            onDelete: this.onDelete,
            onUpdateNote: this.onUpdateNote,
            onEditNoteContent: this.onEditNoteContent,
            onEditNoteTitle: this.onEditNoteTitle,
            writingNoteTitle: this.state.writingNoteTitle,
            writingNoteContent: this.state.writingNoteContent,
            onWriteNoteTitle: this.onWriteNoteTitle,
            onWriteNoteContent: this.onWriteNoteContent,
            onWriteToggle: this.onWriteToggle,
            onSaveNewNote: this.onSaveNewNote
        };
        return (
            <div className="dash-board">
                <div className="write-note">
                    {!this.state.isWritingNote ?
                        <Input className="note-input" type="text" placeholder="Write a note..." onClick={() => {
                            this.onWriteToggle();
                        }}/> : writeNoteView(props)}
                </div>
                <div>
                    {!this.state.notes.length > 0 ? <i>{this.state.message}</i> : <CardColumns>
                        {this.state.notes.map((note) => {
                            return (noteView(note, this.setEditState))
                        })}</CardColumns>}
                    {this.state.isEditingNote && editNoteView(props)}
                </div>
            </div>
        );
    }
}
