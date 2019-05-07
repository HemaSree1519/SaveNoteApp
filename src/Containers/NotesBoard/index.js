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
            notes: [1, 2],
            edit: false
        }
    }

    onEdit = () => {
        console.log("Editable");
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    };

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <Input className="input" type="text" placeholder="Write a note..."/>
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
                                                <CardTitle className="title">Note-1</CardTitle>
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
                                   className="modal-input"
                                   value="Write something (data should remain in modal if unmountOnClose is set to false)"
                                   rows={5}/>
                            <br/>
                            <div className="footer-label">
                                <Label className="footer-edited">Edited 3:33 PM</Label>
                            </div>
                        </ModalBody>
                        <ModalFooter className="modal-footer">
                            <Button className="footer-button" onClick={this.onEdit}>Cancel</Button>{'     '}
                            <Button className="footer-button" onClick={this.onEdit}>Save</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
