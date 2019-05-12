import {Button, Card, Input} from "reactstrap";
import React from "react";

export const writeNoteView = (props) => {
    return (
        <Card className="note-input">
            <Input className="note-card-title-input" type="text" placeholder="Title"
                   value={props.writingNoteTitle}
                   onChange={props.onWriteNoteTitle}
            />
            <Input className="note-card-content-input" type="textarea" placeholder="Write a note..."
                   value={props.writingNoteContent}
                   onChange={props.onWriteNoteContent}
            />
            <div className="footer-container">
                <Button className="footer-button"
                        onClick={() => props.onWriteToggle()}>Cancel</Button>{'  '}
                <Button className="footer-button" onClick={() => props.onSaveNewNote()}>Save</Button>
            </div>
        </Card>
    )
};