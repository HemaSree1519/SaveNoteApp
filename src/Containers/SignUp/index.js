import React, {Component} from "react";
import "./style.css";
import {Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";

export default class Index extends Component {
    handleSignUp = async event => {
        event.preventDefault();
        try {
            this.props.userHasAuthenticated(true);
            this.props.history.push('/notes');
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
                            <Col>
                                <FormGroup>
                                    <Label>Re-Enter Password</Label>
                                    <Input type="password" placeholder="********"/>
                                </FormGroup>
                            </Col>
                            <Button onClick={this.handleSignUp}>SignUp</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}
