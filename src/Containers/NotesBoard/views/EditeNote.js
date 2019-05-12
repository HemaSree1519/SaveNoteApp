import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Moment from "moment";
import React from "react";

export const editNoteView =(props)=>{
    return(
        <Modal isOpen={props.isEditingNote} toggle={props.setEditState}>
            <ModalHeader>
                <Input type="textarea"
                       className="note-card-title-input"
                       value={props.editingNoteTitle}
                       onChange={props.onEditNoteTitle}
                />
            </ModalHeader>
            <ModalBody>
                <Input type="textarea"
                       className="note-card-content-input"
                       value={props.editingNoteContent}
                       onChange={props.onEditNoteContent}
                       rows={5}/>
                <br/>
                <div className="footer-container">
                    <Label
                        className="footer-edited-time">Edited {Moment(props.editingNote['updatedAt']).format('lll')}</Label>
                </div>
            </ModalBody>
            <ModalFooter className="modal-footer">
                <Button className="footer-button" onClick={props.onDelete}>Delete</Button>{'  '}
                <Button className="footer-button" onClick={props.onUpdateNote}>Close</Button>
            </ModalFooter>
        </Modal>
    )
};