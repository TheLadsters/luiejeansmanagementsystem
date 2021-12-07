import React, {useState} from 'react'
import Navbar from '../components/Navbar';  
import { Container, Col, Row, Table, Button,Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';

const Customer = () => {
    const [show,setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [showInfo,setShowInfo] = useState(false);
    const handleShowInfo = () => setShowInfo(true);
    const handleCloseInfo = () => setShowInfo(false);

    return (
        <>
            <Navbar />

            <Container>
                <Row style={{textAlign:'center', marginTop:'30px'}}>
                    <Col>
                        <h1>Customer Page</h1>
                    </Col>
                </Row>
            </Container>  

            <Container>
                <Row className="my-3" style={{textAlign:'end'}}>
                        <Col>
                            <input type="text" className="my-2 w-25" placeholder="Search a Customer"/>
                            <Button variant="dark" className="mx-2">
                            <IoIcons.IoIosSearch />Search
                            </Button>
                        </Col>
                    </Row>
            </Container>

            <Container>
                <Row style={{textAlign:'center', marginTop:'30px'}}>
                    <Col>
                        <Table>
                                <thead>
                                    <tr>
                                    <th>Customer Name</th>
                                    <th>Number of Orders</th>
                                    <th>Contact Number</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>Janmel Mangubat</td>
                                    <td>2</td>
                                    <td>09342212210</td>
                                    <td><Button  onClick={handleShow} variant="success">Info</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Col>
                </Row>
            </Container>

            <Modal show={show}>
                <Modal.Header>
                    <Button onClick={handleShowInfo} variant="info">Customer Info</Button>
                    <div>"[..delivery-type]"</div>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="success" onClick={handleClose} >Add</Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}

export default Customer
