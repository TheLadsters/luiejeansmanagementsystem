import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Button, Container, Col, Row, Modal } from "react-bootstrap";
import Cards from '../components/Cards';
import * as IoIcons from 'react-icons/io';


const Staff = () => {

    // constants for add new staff modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // end of constants

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
                        <Button onClick={handleShow}>Add New Staff</Button>
                    </Col>
                </Row>
            </Container>

        {/* Modal for adding new staff */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Staff Member</Modal.Title>
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
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* End of modal */}

            {/* All cards for staff(should be .map)*/}
            <Container>
                <Row>
                    <Col>
                        <Cards />
                    </Col>
                </Row>
            </Container>
            {/* end of cards */}
        </>
    )
}

export default Staff
