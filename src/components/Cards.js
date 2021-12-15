import React, { useState } from 'react'
import './Cards.css';
import axios from 'axios';
import { Card, Container, Col, Row, Modal, Button } from "react-bootstrap";
const Cards = ( {staff} ) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log(staff._id);
    } 
    const [tasks, setTasks] = useState([]);


    const addTask = async (e) => {
        e.preventDefault();
        
            try{
                const config = {
                    headers: {
                    "Content-type": "application/json",
                    },
                };


            const { data } = await axios.post(
                "http://localhost:5000/users/",
                {
                    tasks
                },
                config
            );

                localStorage.setItem("userInfo", JSON.stringify(data));
 

            } catch (error){
                console.log(error);
            }
    }

    return (
        <>
            <Card style={{ width: '25rem', height:'10rem'}} className="real-card" onClick={handleShow}>
                        <Container>
                            <Card.Body>
                                <Row>
                                    <Col align="center">
                                        <Card.Img variant="top" style={{width:"8rem", height:"8rem"}} src={staff.pic} />
                                    </Col>

                                    <Col className="card-detail"> 
                                        <Card.Text className="card-text">
                                        <Card.Title>{staff.name}</Card.Title>
                                        <Card.Text><b>{staff.role}</b></Card.Text>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Container>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tasks Assigned</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col>
                            <Button variant="dark">
                                Add task
                            </Button>
                        </Col>
                    </Row>
                
                <Row className="py-4">
                   <Col>
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Default checkbox
                        </label>
                    </Col>
                </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cards
