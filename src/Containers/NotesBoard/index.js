import React, {Component} from "react";
import "./style.css"
import {Input} from "reactstrap";

export default class Index extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <Input className="input" type="text" placeholder="Write a note..."/>
                    <p>"Get your note saved with Save Note app"</p>
                </div>
            </div>
        );
    }
}
