import React, {Component} from "react";
import "./style.css"
import {Card, CardBody, CardColumns, CardText, CardTitle, Input} from "reactstrap";

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state ={
            notes: [1]
        }
    }
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <Input className="input" type="text" placeholder="Write a note..."/>
                </div>
                <div>
                    {!this.state.notes.length>0 ?
                        <p>"Get your note saved with Save Note app"</p>
                        :
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle className="title">Note-1</CardTitle>
                                    <CardText>This is a wider card with supporting.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle className="title">Card title</CardTitle>
                                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle className="title">Card title</CardTitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action. This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle className="title">Card title</CardTitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.</CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    }
                </div>
            </div>
        );
    }
}
