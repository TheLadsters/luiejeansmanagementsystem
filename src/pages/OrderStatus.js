import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import { Table, Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';


const OrderStatus = () => {

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
                <Row style={{textAlign:'center', marginTop:'30px'}}>
                    <Col>
                        <h1>Order Status</h1>
                    </Col>
                </Row>
            </Container> 

            <Container>
                
                <Row style={{textAlign:'center', marginTop:'30px'}}>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                <th>Order Image</th>
                                <th>Order Code</th>
                                <th>Quantity</th>
                                <th>Delivery Type</th>
                                <th>Total Balance</th>
                                <th>Status</th>
                                </tr>
                             </thead>

                            <tbody>
                                {orders.map((orders, key) => {
                                    var total = orders.price - orders.downPayment;
                                        //const dateFromDB =  '{orders.orderDate}'
                                        const formattedDate = moment('2022-01-17T16:00:00.000Z').utc().format('MM/DD/YYYY')
                                    return(    
                                        <tr>
                                            <td> {formattedDate} </td>
                                            <td>{orders.productPic}</td>
                                            <td>{orders.orderCode}</td>
                                            <td>{orders.quantity}</td>
                                            <td>{orders.deliveryType}</td>
                                            <td>{total}</td>
                                            <td>{orders.status}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default OrderStatus
