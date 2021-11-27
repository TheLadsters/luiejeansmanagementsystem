import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../images/login-icon.svg';
import './Login.css';
import loginBg from '../images/login-bg.svg';


const Login = () => {
    return (
        <>
            <Container>
                <Row>  
                    <Col lg ={8} md={6} sm={12}>
                        <img className="login-bg" src={loginBg} alt="icon"/>
                    </Col>
                    <Col lg ={4} md={6} sm={12} className="text-center" >
                        <Form>
                            <img className="icon-img" src={loginIcon} alt="icon"/>
                            <h3> Log-in</h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            
                            <Button variant="btn btn-primary w-100" type="submit">Login</Button>

                            <div className="text-start mt-3">
                                <a href="/#"><small className="reset"> No Account yet?</small></a> ||
                                <a href="/#"><small className="reset ml-2"> Forgot Password?</small></a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;