import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';  
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Table, Button, Modal,Accordion, Form} from "react-bootstrap";
import * as IoIcons from 'react-icons/io';

const Customers = props => (
    <tr>
        <td>{props.customer.customerFirstName} {props.customer.customerLastName} </td>
        <td>{props.customer.numberOfOrders} </td>
        <td>{props.customer.contactNumber} </td>
        <td>
            <Link to={"/edit/"+props.customer._id}>
                <Button variant="success" style={{color:"white"}}>Edit</Button>
            </Link>

            <Link to="/customer" onClick={() => {props.deleteCustomers(props.customer._id)}}>
                <Button variant="danger" className="mx-2">Delete</Button>
            </Link>
        </td>
    </tr>

)

const options = [
    {
        label: "Kids",
        options:[
            { value: '14', label: '14'},
            { value: '16', label: '16'},
            { value: '18', label: '18'},
            { value: '20', label: '20'},
            { value: '22', label: '22'},
            { value: '24', label: '24'},
            { value: '26', label: '26'},
        ]
    },
    {
        label: "Male",
        options:[
            { value: 'XS', label: 'XS'},
            { value: 'S', label: 'S'},
            { value: 'M', label: 'M'},
            { value: 'L', label: 'Lf'},
            { value: 'XL', label: 'XL'},
            { value: '2XL', label: '2XL'},
            { value: '3XL', label: '3XL'},  
        ]
    },
    {
        label: "Female",
        options:[
            { value: 'XSf', label: 'XSf'},
            { value: 'Sf', label: 'Sf'},
            { value: 'Mf', label: 'Mf'},
            { value: 'Lf', label: 'Lf'},
            { value: 'XLf', label: 'XLf'},
            { value: '2XLf', label: '2XLf'},
            { value: '3XLf', label: '3XLf'},  
        ]
    },
    
    
];

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
            customerFirstName: '',
            customerLastName: '',
            numberOfOrders: 0,
            contactNumber: '',
            show: false
        });
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
                 <Row style={{textAlign:'center', marginTop:'10px'}}>
                     <Col>
                         <h1>Customer Page</h1>
                     </Col>
                 </Row>
             </Container>  

             <Container>
                 <Row className="my-4">
                        <Col md={6}>
                        <button className="btn btn-dark" onClick={()=>this.handleShow()}>Add New Customer</button>
                        </Col>

                         <Col style={{textAlign:'right'}} md={{span:4, offset: 2}}>
                            <input type="text" className="my-2 w-50" placeholder="Search a Customer"/>
                             <Button variant="dark" className="mx-2">
                             <IoIcons.IoIosSearch />Search
                             </Button>
                         </Col>
                     </Row>
             </Container>

             <Container className="my-4">
                 <Row>
                     <Col>
                        
                     </Col>
                 </Row>
             </Container>

         {/* Modal for adding new staff */}
             <Modal show={this.state.show} onHide={()=>this.handleClose()}>
                 <Modal.Header closeButton>
                     <Modal.Title>Add New Customer</Modal.Title>
                 </Modal.Header>

                 <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Customer Info</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control style={{margin:'10% 0% 0% 0%'}} type="text" value={this.state.customerFirstName} onChange={this.onChangefirstName} required className="form-control" placeholder="First Name"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control style={{margin:'10% 0% 0% 0%'}} type="text" value={this.state.customerLastName} onChange={this.onChangelastName} required className="form-control" placeholder="Last Name"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control style={{margin:'10% 0% 0% 0%'}} type="text"  value={this.state.contactNumber} onChange={this.onChangecontactNumber} required className="form-control" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control
                                                style={{margin:'10% 0% 0% 0%'}}
                                                type="text"
                                                placeholder="Address"
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Row className="d-flex justify-content-between" >
                            <Container style={{width:'30%'}}>
                                <Form.Group>
                                    <Form.Control
                                        type="date"
                                        name="deadline"
                                        required
                                        placeholder="Deadline"
                                    />
                                </Form.Group>
                            </Container>
                                    
                            <Container style={{width:'30%'}}>
                                <FormControl
                                    placeholder="Order-Code"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </Container>

                            <ButtonGroup as={Row} style={{width:'30%',margin:'0% 2%'}} size="sm">
                                <ButtonGroup as={Row} size="sm">
                                    <Button className="w-50" variant = "primary">P</Button>
                                    <Button className="w-50" variant = "secondary">D</Button>
                                </ButtonGroup>
                            </ButtonGroup>
                        </Row>
                        <Container className="d-flex mt-10">
                            <Card style={{ width: '100%',margin:'5% 20% 5% 20%'}}>
                                <Nav>
                                    <Nav.Link className="bg-image hover-overlay ripple shadow-1-strong" href="/"><Card.Img className="" variant="top" src={Upload} /></Nav.Link>
                                </Nav>
                                <ListGroup className="list-group-flush">
                                    <FormControl
                                        placeholder="Product Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        size = "sm"
                                    />
                                </ListGroup>
                            </Card>
                        </Container >
                        <Container className="d-flex justify-content-between" style={{width:'100%', margin:'0% 0% 5%'}}>
                            <Container className="d-inline-flex"    >
                                <label>Price</label>
                                <FormControl
                                            className="w-50"
                                            placeholder="ex:1354"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            size = "sm"
                                            type = "number"
                                />
                            </Container>
                            <Container className="d-inline-flex" size="sm">
                                <label>DP</label>
                                <FormControl
                                            className="w-50"
                                            placeholder="ex:1354"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            size = "sm"
                                            type ="number"
                                />
                            </Container>
                        </Container>
                        
                        {orders.map((order,index) =>
                            <FormGroup className=" d-flex flex-col align-items-center" key={index}>
                                <Select className="w-50" onChange={event => handleChangeSelect(index,event)} options={options} label="Choose size" />
                                <Form.Control
                                            id="size-quantity"
                                            type="number"
                                            placeholder="12345"
                                            className="w-50"
                                            style={{height:"11%"}}
                                />

                                <IconButton>
                                    <AiOutlineMinus
                                        onClick={() => handleRemoveSize()}
                                    />
                                </IconButton>
                                <IconButton>
                                    <AiOutlinePlus
                                        
                                        onClick={() => handleAddSize(index)}
                                    />
                                </IconButton>
                            </FormGroup>
                            
                        )}
                        <Container className="mt-0" style={{padding:'10 % 0% 5% 0%'}}>
                            <Row>
                                <Col>Quantity:  10</Col>
                                <Col>Total: 1000</Col>
                                <Col>Balance: 500</Col>
                            </Row>
                        </Container>
                                    

                        <div className="form-group my-4">
                            <Button variant="secondary" onClick={()=>this.handleClose()}>
                                Close
                            </Button>
                            <button type="submit" className="btn btn-success mx-2">
                                Save Changes
                            </button>
                        </div>
                    </Form>
                 </Modal.Body>

             </Modal>

             
             {/* End of modal */}

             <Container>
                 <Row style={{textAlign:'center', marginTop:'30px'}}>
                     <Col>
                         <Table>
                                 <thead style={{backgroundColor:'grey', color:'white', height:'60px',
                                borderTop:'solid black 2px', borderBottom:'solid black 2px', verticalAlign:'middle'}}>
                                     <tr>
                                     <th>Customer Name</th>
                                     <th>Number of Orders</th>
                                     <th>Contact Number</th>
                                     <th>Status</th>
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
