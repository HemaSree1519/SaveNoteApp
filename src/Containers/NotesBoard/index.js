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

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [1, 2, 3],
            edit: false,
            isWritingNote: false
        }
    }

    onEdit = () => {
        console.log("Editable");
        this.setState(prevState => ({
            edit: !prevState.edit
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
                        <p>"Get your note saved with Save Note app"</p>
                        :
                        <CardColumns>
                            {
                                this.state.notes.map((note) => {
                                    return (
                                        <Card onClick={() => {
                                            console.log("Edit the card");
                                            this.onEdit(true);
                                        }}>
                                            <CardBody>
                                                <CardTitle className="card-title">Note-1</CardTitle>
                                                <CardText>This is a wider card with supporting.</CardText>
                                            </CardBody>
                                        </Card>
                                    )
                                })
                            }

                        </CardColumns>
                    }
                    <Modal isOpen={this.state.edit} toggle={this.onEdit}>
                        <ModalHeader className="modal-header">Modal title</ModalHeader>
                        <ModalBody>
                            <Input type="textarea"
                                   className="note-card-input"
                                   value="Write something (data should remain in modal if unmountOnClose is set to false)"
                                   rows={5}/>
                            <br/>
                            <div className="footer-container">
                                <Label className="footer-edited-time">Edited 3:33 PM</Label>
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
