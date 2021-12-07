import React, { useState } from 'react';
import { CloseButton,Table, Container, Row, Col, ToggleButton,Modal, ButtonGroup,Button,DropdownButton,Dropdown} from "react-bootstrap";
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Mods from '../components/Modal';
import CustomerInfo from '../components/CustomerInfo';

const LandingPage = () => {
    const [show,setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const [showInfo,setShowInfo] = useState(false);
    const handleShowInfo = () => setShowInfo(true);
    const handleCloseInfo = () => setShowInfo(false);
    return (
    <>
            <Routes>
                <Route path="/" exact/>
            </Routes>
        
        <Navbar />

        <Container>
            <Row className="text-end">
                <Col md={4} className="mt-5 pt-3 pr-5 text-start">
                <Button variant="primary" onClick={handleShow} className="btn btn-dark"><IoIcons.IoIosAddCircleOutline /> Add</Button>
                </Col>

                <Col className="mt-5">
                    <input type="text" className="my-3 mx-2" placeholder="Search"/>
                    <Button variant="dark"><IoIcons.IoIosSearch />Search</Button>
                </Col>
            </Row>
        </Container>

        <Modal show={show} className="h-100" >
            <Modal.Header>
                <Button onClick={handleShowInfo} variant="info">Customer Info</Button>
                <DropdownButton as={ButtonGroup} title="Delivery Type" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Pick-Up</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Deliver</Dropdown.Item>
                </DropdownButton>
            </Modal.Header>
            <Modal.Body>
                <Mods />
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="success" onClick={handleClose} >Add</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showInfo}>
            <Modal.Header>
                <Modal.Title>
                    Customer Info
                </Modal.Title>
                <CloseButton onClick={handleCloseInfo} />
            </Modal.Header>
            <Modal.Body >
                <CustomerInfo />
            </Modal.Body>
        </Modal>
        
        <Container>
            <Table className="text-center">
                <thead>
                    <tr>
                        <th>Deadline</th>
                        <th>Customer's Name</th>
                        <th>Order Code</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Downpayment</th>
                        <th>Delivery Type</th>
                        <th>Total Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {}
                            <td>October 29, 2021</td>
                            <td>Janmel Mangubat</td>
                            <td>X000001</td>
                            <td>21</td>
                            <td>100</td>
                            <td>1000</td>
                            <td>Pick-up</td>
                            <td>2100</td>
                            <td>
                                <button className="btn btn-success mx-1">
                                    Delivered
                                </button>

                                <button className="btn btn-dark mx-1">
                                    Edit
                                </button>

                                <button className="btn btn-danger mx-1">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        
                </tbody>
            </Table>
        </Container>
    </>
    )
}

export default LandingPage
