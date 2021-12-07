import React from 'react'
import Navbar from '../components/Navbar';
import { Table, Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const OrderStatus = () => {

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
                                <tr>
                                <td>October 29, 2021</td>
                                <td>X000001</td>
                                <td>21</td>
                                <td>100</td>
                                <td>1000</td>
                                <td>
                                <select className="form-control" name="city">
                                        <option selected>Select Status</option>
                                        <option value="Printing">Printing</option>
                                        <option value="Cutting">Sewing</option>
                                        <option value="Trimming">Trimming</option>
                                        <option value="Packing">Packing</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </td>

                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default OrderStatus
