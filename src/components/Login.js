import React, { useState, useEffect } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from '../images/login-icon.svg';
import './Login.css';
import loginBg from '../images/login-bg.svg';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
      
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post(
                "http://localhost:5000/users/login",
                {
                    email,
                    password
                },
                config
            );
            
            console.log(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false)

            navigate("/landing-page");

        } catch (error){
            setError(error.response.data.message);
            setLoading(false)
        }
    };

    return (
        <>
            <Container>
                <Row>  
                    <Col lg ={8} md={6} sm={12}>
                        <img className="login-bg" src={loginBg} alt="icon"/>
                    </Col>
                    <Col lg ={4} md={6} sm={12} className="text-center" >
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {loading && <Loading />}
                        <Form onSubmit={submitHandler} idControl="form">
                            <img className="icon-img" src={loginIcon} alt="icon"/>
                            <h3> Log-in</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                                <Button variant="btn btn-primary w-100" type="submit">Login</Button>
                            </Form>

                            <div className="text-start mt-3">
                                <Link to='/register'>
                                <a href="/register"><small className="reset"> No Account yet?</small></a>
                                </Link> ||
                                <a href="/#"><small className="reset ml-2"> Forgot Password?</small></a>
                            </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;