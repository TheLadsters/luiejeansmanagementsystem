import React, { useState } from 'react';
import { Table, Container, Row, Col, ToggleButton} from "react-bootstrap";
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from 'react-icons/io';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const LandingPage = () => {
    const [buttonAdd, setButtonAdd] =useState(false);
    return (
    <>
            <Routes>
                <Route path="/" exact/>
            </Routes>
        
        <Navbar />

        <Container>
            <Row className="text-end">
                <Col md={4} className="mt-5 pt-3 pr-5 text-start">
                <button onClick={() => setButtonAdd(true)
                } className="btn btn-dark"><IoIcons.IoIosAddCircleOutline /> Add</button>
                </Col>

                <Col className="mt-5">
                    <input type="text" className="my-3 mx-2" placeholder="Search"/>
                    <button className=" btn btn-primary w-10 my-3 mx-2 text-dark">Search</button>
                </Col>
            </Row>
        </Container>

        <Modal trigger={buttonAdd} setTrigger={setButtonAdd}>

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
