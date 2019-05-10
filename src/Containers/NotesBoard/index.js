import React, {Component} from "react";
import "./style.css"
import {
    Button,
    Card,
    CardBody,
    CardColumns,
    CardText,
    CardTitle,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import Moment from 'moment'
import {getUser} from "../../Session/UserSession";
import {createNote, deleteNote, getAllNotesOfUser} from "../../RestService/Notes";
import {formNoteDetails} from "./service";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isEditing: false,
            isWritingNote: false,
            editingNote: '',
            currentNoteTitle: '',
            currentNoteContent: '',
            writingNoteTitle: '',
            writingNoteContent: ''
        }
    }

    componentDidMount() {
        this.getNotes().then();
    }

    getNotes = async () => {
        const email = getUser();
        await getAllNotesOfUser(email).then((listOfNotes) => {
            if (listOfNotes.length > 0) {
                this.setState({
                    notes: listOfNotes
                });
            }
        });
    };

    onEdit = (note) => {
        this.setState(prevState => ({
            isEditingNote: !prevState.isEditingNote,
            editingNote: note,
            currentNoteContent: note["content"],
            currentNoteTitle: note['title']
        }))
    };

    onDelete = () => {
        deleteNote(this.state.editingNote["email"], this.state.editingNote["id"]).then((reponse) => {
            if (reponse === 200) {
                this.getNotes().then();
            }
        });
        this.setState(prevState => ({
            isEditingNote: !prevState.isEditingNote
        }))
    }
    ;
    onWriteToggle = () => {
        this.setState({
            isWritingNote: !this.state.isWritingNote,
            writingNoteTitle: '',
            writingNoteContent: ''
        })

    };

    onWriteNoteTitle = (writingNoteTitle) => {
        console.log(writingNoteTitle.target.value);
        this.setState({
            writingNoteTitle: writingNoteTitle.target.value
        })

    };

    onWriteNoteContent = (writeNoteContent) => {
        console.log(writeNoteContent.target.value);
        this.setState({
            writingNoteContent: writeNoteContent.target.value
        })
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
        console.log(editedContent.target.value);
        this.setState({
            currentNoteContent: editedContent.target.value
        })
    };

    onEditNoteTitle = (editedTitle) => {
        console.log(editedTitle.target.value);
        this.setState({
            currentNoteTitle: editedTitle.target.value
        })
    };

    render() {
        return (
            <div className="dash-board">
                <div className="write-note">
                    {!this.state.isWritingNote ?
                        <Input className="note-input" type="text" placeholder="Write a note..." onClick={() => {
                            this.onWriteToggle();
                        }}/>
                        :
                        <Card className="note-input">
                            <Input className="note-card-title-input" type="text" placeholder="Title"
                                   value={this.state.writingNoteTitle}
                                   onChange={this.onWriteNoteTitle}
                            />
                            <Input className="note-card-content-input" type="textarea" placeholder="Write a note..."
                                   value={this.state.writingNoteContent}
                                   onChange={this.onWriteNoteContent}
                            />
                            <div className="footer-container">
                                <Button className="footer-button"
                                        onClick={() => this.onWriteToggle()}>Cancel</Button>{'  '}
                                <Button className="footer-button" onClick={() => this.onSaveNewNote()}>Save</Button>
                            </div>
                        </Card>
                    }

                </div>
                <div>
                    {!this.state.notes.length > 0 ?
                        <i>"Get your note saved with Save Note app"</i>
                        :
                        <CardColumns>
                            {
                                this.state.notes.map((note) => {
                                    return (
                                        <Card onClick={() => {
                                            this.onEdit(note);
                                        }}>
                                            <CardBody>
                                                <CardTitle className="card-title">{note["title"]}</CardTitle>
                                                <CardText>{note["content"]}</CardText>
                                            </CardBody>
                                        </Card>
                                    )
                                })
                            }

                        </CardColumns>
                    }
                    <Modal isOpen={this.state.isEditingNote} toggle={this.onEdit}>
                        <ModalHeader>
                            <Input type="textarea"
                                   className="note-card-title-input"
                                   value={this.state.currentNoteTitle}
                                   onChange={this.onEditNoteTitle}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <Input type="textarea"
                                   className="note-card-content-input"
                                   value={this.state.currentNoteContent}
                                   onChange={this.onEditNoteContent}
                                   rows={5}/>
                            <br/>
                            <div className="footer-container">
                                <Label
                                    className="footer-edited-time">Edited {Moment(this.state.editingNote['updatedAt']).format('lll')}</Label>
                            </div>
                        </ModalBody>
                        <ModalFooter className="modal-footer">
                            <Button className="footer-button" onClick={this.onDelete}>Delete</Button>{'  '}
                            <Button className="footer-button" onClick={this.onEdit}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
