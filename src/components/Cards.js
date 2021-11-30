import React, { useState } from 'react'
import './Cards.css';
import { Card, Container, Col, Row, Modal, Button } from "react-bootstrap";
const Cards = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '25rem' }} className="real-card" onClick={handleShow}>
                        <Container>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Img variant="top" style={{width:"8rem"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                        <Card.Title>Jerald Magsipoc</Card.Title>
                                        <Card.Text style={{textAlign:"center"}}>Tailor</Card.Text>
                                    </Col>

                                    <Col> 
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Container>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>List of Things to Do</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="form-check">
                    <input className="form-check-input" disabled type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cards
