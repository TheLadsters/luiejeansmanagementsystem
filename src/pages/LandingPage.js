import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';  
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Table, Button, Modal, Form} from "react-bootstrap";
import * as IoIcons from 'react-icons/io';
import Mods from '../components/Modal';
import CustomerInfo from '../components/CustomerInfo';

const Customers = props => (
    <tr>
        <td>{props.customer.customerFirstName} {props.customer.customerLastName} </td>
        <td>{props.customer.numberOfOrders} </td>
        <td>{props.customer.contactNumber} </td>
        <td>
            <Link to={"/edit/"+props.customer._id}>
                <Button variant="warning">Edit</Button>
            </Link>

            <a href="/customer" variant="danger" onClick={() => {props.deleteCustomers(props.customer._id)}} className="mx-2">Delete</a></td>
    </tr>

)

export class Customer extends Component {

    constructor(props){
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangenumberOfOrders = this.onChangenumberOfOrders.bind(this);
        this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customerFirstName: '',
            customerLastName: '',
            numberOfOrders: 0,
            contactNumber: '',
            show: false
        }

        this.state = {customers: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/customers/')
        .then(response => {
            this.setState({ customers: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleClose(){
        this.setState({show: false})
    }

    handleShow(){
        this.setState({show: true})
    }

    onChangefirstName(e) {
        this.setState({
            customerFirstName: e.target.value
        });
    }

    onChangelastName(e) {
        this.setState({
            customerLastName: e.target.value
        });
    }

    onChangenumberOfOrders(e) {
        this.setState({
            numberOfOrders: e.target.value
        });
    }

    onChangecontactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

    onSubmit(e){

        const customer = {
            customerFirstName: this.state.customerFirstName,
            customerLastName: this.state.customerLastName,
            numberOfOrders: this.state.numberOfOrders,
            contactNumber: this.state.contactNumber
        }

        console.log(customer);
        axios.post('http://localhost:5000/customers/add', customer)
        .then(res => console.log(res.data));

        this.setState({
            customerFirstName: ''
        });
        this.setState({
            customerLastName: ''
        });
        this.setState({
            numberOfOrders: 0
        });
        this.setState({
            contactNumber: ''
        });
        this.setState({show: false})
    }

    deleteCustomers(id){
        axios.delete('http://localhost:5000/customers/'+id)
        .then(res => console.log(res.data));

        this.setState({
            customers: this.state.customers.filter(el => el._id !== id)
        })
    }

    customerList(){
        return this.state.customers.map(currentCustomer => {
            return <Customers customer = {currentCustomer} deleteCustomers={this.deleteCustomers} key={currentCustomer._id}/>;
        })
    }
    
    render() {
        return (
            <>
                <Navbar />

             <Container>
                 <Row style={{textAlign:'center', marginTop:'30px'}}>
                     <Col>
                         <h1>Customer's Orders</h1>
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

             <Container className="my-4">
                 <Row>
                     <Col>
                         <button className="btn btn-dark" onClick={()=>this.handleShow()}>Add New Customer</button>
                     </Col>
                 </Row>
             </Container>

         {/* Modal for adding new staff */}
             <Modal show={this.state.show} onHide={()=>this.handleClose()} onSubmit={this.onSubmit}>
                <Modal.Header closeButton>
                    <Button onClick={()=>this.handleClose()} variant="info">Customer Info</Button>
                    <Form.Select title="Delivery Type" id="bg-nested-dropdown">
                        <option eventKey="1">Pick-Up</option>
                        <option eventKey="2">Deliver</option>
                    </Form.Select>
                </Modal.Header>
                <Modal.Body>
                    <Mods/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleClose()}>
                        Close
                    </Button>
                    <button type="submit" className="btn btn-success mx-2">
                        Save Changes
                    </button>
                </Modal.Footer>
             </Modal>

             

             
             {/* End of modal */}

             <Container>
                 <Row style={{textAlign:'center', marginTop:'30px'}}>
                     <Col>
                         <Table>
                                 <thead style={{backgroundColor:'grey', color:'white'}}>
                                     <tr>
                                     <th>Customer Name</th>
                                     <th>Number of Orders</th>
                                     <th>Contact Number</th>
                                     <th>Action</th>
                                    </tr>
                                 </thead>

                                 <tbody>
                                     { this.customerList() }
                                 </tbody>
                            </Table>
                     </Col>
                 </Row>
             </Container> 
            </>
        )
    }
}

export default Customer
