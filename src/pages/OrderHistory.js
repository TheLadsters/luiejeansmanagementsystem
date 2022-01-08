import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Form, Button} from "react-bootstrap";
import Navbar from '../components/Navbar';
import axios from 'axios';
import moment from 'moment';



const OrderHistory = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:5000/customers/")
        .then(res => setOrders(res.data))
        .catch(error => console.log(error));
    },[setOrders]);


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
                            <Form.Control type="date" value="01/01/15" className="w-75" data-provide="datepicker" />
                        </Col>

                        <Col sm={{span:3, offset:5}} className="my-1">
                            <Form.Control type="text" className="w-100" placeholder="Search Orders"/>
                        </Col>

                        <Col sm={{span:1, offset:0}} className="mt-1">
                            <Button variant="dark" className="w-10 mx-2 mb-1 text-light">Search</Button>
                        </Col>
                </Row>
            </Form>
            </Container>

            <Container className="border border-black mt-4">
            <Table className="text-center">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Customer's Name</th>
                    <th>Order Code</th>
                    <th>Downpayment</th>
                    <th>Price</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                    <td>October 29, 2021</td>
                    <td>Janmel Mangubat</td>
                    <td>X000001</td>
                    <td>21</td>
                    <td>100</td>
                    <td>24000</td>
                    </tr> */}
                
                    {orders.map((orders, key) => {
                        var total = orders.price - orders.downPayment;
                         const formattedDate = moment(orders.orderDate).utc().format('MM/DD/YYYY')
                        return(
                            
                            <tr>
                                
                                <td> {formattedDate} </td>
                                <td>{orders.customerFirstName} {orders.customerLastName}</td>
                                <td>{orders.orderCode}</td>
                                <td>{orders.downPayment}</td>
                                <td>{orders.price}</td>
                                <td>{total}</td>
                                <td></td>
                            </tr>
                            
                        )
                    })}
                    
                </tbody>
            </Table>
        </Container>


        </>
    )
}

export default OrderHistory
