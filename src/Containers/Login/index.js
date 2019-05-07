import React, {Component} from "react";
import "./style.css";
import {Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";

export default class Index extends Component {
    handleLogin = async event => {
        event.preventDefault();
        try {
            this.props.userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        return (
            <div>
                <div className="login-form">
                    <Container>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" placeholder="example@gmail.com"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="********"/>
                                </FormGroup>
                            </Col>
                            <Button onClick={this.handleLogin}>Login</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}
