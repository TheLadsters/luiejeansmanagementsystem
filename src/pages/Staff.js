import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { Button, Container, Col, Row, Modal, Form } from "react-bootstrap";
import Cards from '../components/Cards';
import * as IoIcons from 'react-icons/io';
import Select from 'react-select';
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"
import axios from 'axios';
import './Staff.css';



const Staff = () => {

    // constants for add new staff modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [registerSuccess, setRegisterSuccess] = useState(null);
    const [role, setRole] = useState("");
    // end of constants

    function onChangeRole(role){
        setRole(role.value);
    }


    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const Roles = [
        { label: "Designer", value: "Designer" },
        { label: "Seamstress", value: "Seamstress" },
        { label: "Tailor", value: "Tailor" },
        { label: "Packager", value: "Packager" },
        { label: "Printer", value: "Printer" },
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
                setRegisterSuccess("You have Registered Successfully!");
 

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
                console.log("data succesfully uploaded");
            })
            .catch((err) => {
                console.log(err);
            });
        } else{
            return setPicMessage("Please Select an Image");
        }
    };
    const [staff, setStaff] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:5000/users")
        .then(res => setStaff(res.data))
        .catch(error => console.log(error));
    },[setStaff]);

    return (
        <>
        <Navbar />

            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1 style={{textAlign:"center"}}>Staff</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="my-3" style={{textAlign:'end'}}>
                    <Col>
                        <input type="text" className="my-2 w-25" placeholder="Search a Staff Member"/>
                        <Button variant="dark" className="mx-2">
                        <IoIcons.IoIosSearch />Search
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Container className="my-4">
                <Row>
                    <Col>
                        <Button variant ="success" onClick={handleShow}>Add New Staff</Button>
                    </Col>
                </Row>
            </Container>

        {/* Modal for adding new staff */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Staff Member</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                        Save Changes
                    </Button>
                    
                    <Button variant="secondary" className="mx-2" onClick={handleClose}>
                        Close
                    </Button>
                </Form>

                </Modal.Body>
            </Modal>
            {/* End of modal */}

            {/* All cards for staff(should be .map)*/}
            <div className="staff-container container">
                <div className="row">
                    {staff.map((staff, key) => {
                        return <div className="my-4"><Cards staff={staff}/></div>
                    })}
                </div>
            </div> 
            {/* end of cards */}
        </>
    )
}

export default Staff
