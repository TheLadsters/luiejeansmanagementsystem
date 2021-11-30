import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Form, Button} from "react-bootstrap";
import Navbar from '../components/Navbar';

const OrderHistory = () => {
    return (
        <>
            <Navbar />

            <Container>
                <Row className="text-center my-3">
                    <Col>
                    <h1>Order History</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
            <Form>
                <Row>
                        <Col sm={3}>
                            <Form.Control type="date" value="01/01/15" data-provide="datepicker" />
                        </Col>

                        <Col sm={{span:3, offset:5}} className="my-1    ">
                            <Form.Control type="text" placeholder="Search"/>
                        </Col>

                        <Col sm={{span:1, offset:0}} className="mt-1">
                            <Button variant="primary" className="w-10 mx-2 mb-1 text-light">Search</Button>
                        </Col>
                </Row>
            </Form>
            </Container>

            <Container className="border border-black mt-4">
            <Table className="text-center">
                <thead>
                    <tr>
                    <th>Order Number</th>
                    <th>Date</th>
                    <th>Customer's Name</th>
                    <th>Order Code</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>#00001</td>
                    <td>October 29, 2021</td>
                    <td>Janmel Mangubat</td>
                    <td>X000001</td>
                    <td>21</td>
                    <td>100</td>
                    <td>24000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>


        </>
    )
}

export default OrderHistory
