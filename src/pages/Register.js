import axios from 'axios';
import React, {useState} from 'react'
import {Form, Button, Container, Navbar, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"


const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [registerSuccess, setRegisterSuccess] = useState(null);
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    function onChangeRole(role){
        setRole(role.value);
    }

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const Roles = [
        { label: "Tailor", value: "Tailor" },
        { label: "Printer", value: "Printer" },
        { label: "Delivery", value: "Delivery" },
    ]

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (password !== confirmpassword){
            setMessage("Passwords Do not Match");
        } else{
            setMessage(null)
            try{
                const config = {
                    headers: {
                    "Content-type": "application/json",
                    },
                };

            setLoading(true)

            const { data } = await axios.post(
                "http://localhost:5000/users/",
                {
                    name,email,password, role, pic
                },
                config
            );

                setLoading(false);
                // localStorage.setItem("userInfo", JSON.stringify(data));
                setRegisterSuccess("You have Registered Successfully! You are now redirected to the Login Page...");
                alert('You have Registered Successfully! You are now redirected to the Login Page...');
                navigate("/");

            } catch (error){
                setError(error.response.data.message);
                setLoading(false)
            }
        }

    }

    const postDetails = (pics) => {
        if(!pics) {
            return setPicMessage("Please Select an Image");
        }

        setPicMessage(null);

        if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
            const data = new FormData();
            data.append('file', pics)
            data.append('upload_preset', 'luiejeans')
            data.append('cloud_name', 'dhvbaxacn')
            fetch("https://api.cloudinary.com/v1_1/dhvbaxacn/image/upload", {
                method:"post",
                body:data,
            })
            .then((res) => res.json())
            .then((data) => {
                setPic(data.url.toString());
            })
            .catch((err) => {
                console.log(err);
            });
        } else{
            return setPicMessage("Please Select an Image");
        }
    };
    return (
        <>
        <Navbar variant="dark" className="color-nav p-2">
                <Navbar.Brand href="/">
                    <Button variant="success">
                        <FaIcons.FaBackward />
                        <br></br>
                        Back to Login
                    </Button>      
                </Navbar.Brand>
        </Navbar>

    <Container>
        <div className="registerContainer my-5">
        <h1>REGISTER</h1>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {registerSuccess && <ErrorMessage variant="success">{registerSuccess}</ErrorMessage>}
        {loading && <Loading />}    
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Select options={Roles} onChange={onChangeRole}/>
                </Form.Group>

                {picMessage && (<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
                <Form.Group className="mb-3" controlId="formBasicProfilePicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control type="file" onChange={(e) => postDetails(e.target.files[0])} label="Upload Profile Picture" custom/>
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </Container>
        </>
    )
}

export default Register
