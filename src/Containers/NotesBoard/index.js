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
import {getAllNotesOfUser} from "../../RestService/Notes";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isEditing: false,
            isWritingNote: false,
            editingNote: ''
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
            isEditing: !prevState.isEditing,
            editingNote: note
        }))
    };
    onWrite = () => {
        this.setState({
            isWritingNote: !this.state.isWritingNote
        })
    };

    render() {
        return (
            <div className="dash-board">
                <div className="write-note">
                    {!this.state.isWritingNote ?
                        <Input className="note-input" type="text" placeholder="Write a note..." onClick={() => {
                            this.onWrite();
                        }}/>
                        :
                        <Card className="note-input">
                            <Input className="note-card-input" type="text" placeholder="Title"/>
                            <Input className="note-card-input" type="textarea" placeholder="Write a note..."/>
                            <div className="footer-container">
                                <Button className="footer-button" onClick={() => this.onWrite()}>Close</Button>
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
                    <Modal isOpen={this.state.isEditing} toggle={this.onEdit}>
                        <ModalHeader className="modal-header">{this.state.editingNote["title"]}</ModalHeader>
                        <ModalBody>
                            <Input type="textarea"
                                   className="note-card-input"
                                   value={this.state.editingNote["content"]}
                                   rows={5}/>
                            <br/>
                            <div className="footer-container">
                                <Label
                                    className="footer-edited-time">Edited {Moment(this.state.editingNote['updatedAt']).format('lll')}</Label>
                            </div>
                        </ModalBody>
                        <ModalFooter className="modal-footer">
                            <Button className="footer-button" onClick={this.onEdit}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
