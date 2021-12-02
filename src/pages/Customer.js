import React from 'react'
import Navbar from '../components/Navbar';  
import { Container, Col, Row, Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';

const Customer = () => {
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
                                    <td><Button variant="success">Info</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Col>
                </Row>
            </Container> 
            
        </>
    )
}

export default Customer
