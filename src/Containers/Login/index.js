import React, {Component} from "react";
import "./style.css";
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {CODES} from "../../ErrorCodes/codes";
import {isAuthenticated} from "./service";

let userEmail = '';
let userPwd = '';
export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errorMessage: ''
        }
    }

    handleLogin = async event => {
        event.preventDefault();
        try {
            await isAuthenticated(userEmail, userPwd).then((responce) => {
                if (responce === true) {
                    this.props.userHasAuthenticated(true);
                    this.props.history.push('/notes');
                }
                else {
                    this.setErrorState(true, responce)
                }
            });
        } catch (e) {
            this.setErrorState(true, CODES["103"])
        }
    };
    setErrorState = (flag, message) => {
        this.setState({
            isError: flag,
            errorMessage: message
        });
    };
    onEmail = (email) => {
        this.setErrorState(false, '');
        userEmail = email.target.value;
    };

    onPassword = (password) => {
        this.setErrorState(false, '');
        userPwd = password.target.value;
    };

    render() {
        return (
            <Form>
                {this.state.isError && <p className="error">{this.state.errorMessage}</p>}
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail"
                               placeholder="example@gmail.com" onChange={this.onEmail}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="password" placeholder="Password" onChange={this.onPassword}/>
                    </FormGroup>
                </Col>
                <Button onClick={this.handleLogin}>Login</Button>
            </Form>
        );
    }
}
