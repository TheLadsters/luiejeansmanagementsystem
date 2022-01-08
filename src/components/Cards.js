import React, { useState, useEffect, useCallback } from 'react'
import './Cards.css';
import axios from 'axios';
import * as AiIcons from 'react-icons/ai';
import { Card, Container, Col, Row, Modal, Button, Form } from "react-bootstrap";
const Cards = ( {staff} ) => {

    const [show, setShow] = useState(false);
    const [task, setTask] = useState("");
    const [taskKey, setTaskKey] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};
    const reload=()=>window.location.reload();
    // const [,updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);
    
    const addTask = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
            "Content-type": "application/json",
            },
        };

        return axios.post(
            "http://localhost:5000/users/addTask",
            {
                email:staff.email, 
                task
            },
            config
        )
        .then(reload())
        .catch((err) => {
            console.log(err);
        });
        
    } 

    const deleteTask = async (task) => {
        console.log(task);
        
        const config = {
            headers: {
            "Content-type": "application/json",
            },
        };

        return axios.post(
            "http://localhost:5000/users/deleteTask",
            {
                email:staff.email, 
                task,
            },
            config
        )
        .then(reload())
        .catch((err) => {
            console.log(err);
        });
        
    } 

    return (
        <>
            <Card style={{ width: '25rem', height:'10rem'}} className="real-card" onClick={ handleShow }>
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
                <Form onSubmit={addTask}>
                        <Row>
                            <Col md={8}>
                                <Form.Control type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task" />
                            </Col>
                            <Col>
                                <Button type="submit" variant="success">
                                <AiIcons.AiOutlineCheckCircle />
                                </Button>
                            </Col>
                        </Row>
                </Form>
                    
                    <Row className="py-4">
                        <Col>
                            {staff.tasks.map(tasks => (
                                <ul style={{listStyleType:"none"}}>
                                    <li>
                                    <Card style={{border:"1px solid dark", width:"390px"}}>
                                        <Card.Body>    
                                            {tasks}
                                            <Button
                                            variant="danger" value={tasks} onClick={(e) => {deleteTask(tasks)}} className="mx-2">
                                                <AiIcons.AiFillCloseSquare />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    </li>
                                </ul>
                                ))}
                            
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cards
