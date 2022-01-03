import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';  
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Table, Button, Modal,Accordion, Form    } from "react-bootstrap";
import * as IoIcons from 'react-icons/io';
// import Upload from '../images/add-files.svg';
// import Select from "react-select";
// import IconButton from "@material-ui/core/IconButton";
import Mods from '../components/Modal';
// import CustomerInfo from '../components/CustomerInfo';

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

const Customers = props => (
    <tr>
        <td>{props.customer.customerFirstName} {props.customer.customerLastName} </td>
        <td>{props.customer.numberOfOrders} </td>
        <td>{props.customer.contactNumber} </td>
        <td>
            <Link to={"/edit/"+props.customer._id}>
                <Button variant="warning" style={{color:"white"}}>Edit</Button>
            </Link>

            <a href="/landing-page" onClick={() => {props.deleteCustomers(props.customer._id)}} className="mx-2">
                <Button variant="danger">
                Delete
                </Button>
            </a>
                </td>
    </tr>

)



export class LandingPage extends Component {

    constructor(props){
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
        this.onChangecustomerAddress = this.onChangecustomerAddress.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeorderDate = this.onChangeorderDate.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangeorderCode = this.onChangeorderCode.bind(this);
        this.onChangeproductSize = this.onChangeproductSize.bind(this);
        // this.onChangedeliveryType = this.onChangedeliveryType.bind(this);
        this.onChangePickUp = this.onChangePickUp.bind(this);
        this.onChangeDelivery = this.onChangeDelivery.bind(this);
        this.onChangeproductPic = this.onChangeproductPic.bind(this);
        this.onChangedownPayment = this.onChangedownPayment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customerFirstName: '',
            customerLastName: '',
            contactNumber: '',
            
            show: false
        }

        this.state = {orders:{size:'', sizeQuantity:''}}

        this.state = {customers: []};   
    }

    componentDidMount(){
        axios.get('http://localhost:5000/landing-page/')
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
    
    handleCloseInfo(){
        this.setState({showInfo: false})
    }

    handleShow(){
        this.setState({show: true})
    }

    handleShowInfo(){
        this.setState({showInfo: true})
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
    
    onChangecontactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

    onChangenumberOfOrders(e) {
        this.setState({
            numberOfOrders: e.target.value
        });
    }

    onChangecustomerAddress(e) {
        this.setState({
            customerAddress: e.target.value
        });
    }

    onChangeproductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeorderDate(e) {
        this.setState({
            orderDate: e.target.value
        });
    }

    onChangeprice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeorderCode(e) {
        this.setState({
            orderCode: e.target.value
        });
    }

    onChangeproductSize(e) {
        this.setState({
            productSize: e.target.value
        });
    }

    onChangePickUp(e) {
        this.setState({
            PickUp: e.target.value
        });
    }

    onChangeDelivery(e) {
        this.setState({
            Delivery: e.target.value
        });
    }

    onChangeproductPic(e) {
        this.setState({
            productPic: e.target.value
        });
    }

    onChangedownPayment(e) {
        this.setState({
            downPayment: e.target.value
        });
    }

    





    onSubmit(e){
        const customer = {
            customerFirstName: this.state.customerFirstName,
            customerLastName: this.state.customerLastName,
            numberOfOrders: this.state.numberOfOrders,
            contactNumber: this.state.contactNumber,
            customerAddress: this.state.customerAddress,
            productName: this.state.productName,
            orderDate: this.state.orderDate,
            price: this.state.price,
            orderCode: this.state.orderCode,
            productSize: this.state.productSize,
            deliveryType: this.state.deliveryType,
            productPic: this.state.productPic,
            downPayment: this.state.downPayment
        }


        console.log(customer);
        axios.post('http://localhost:5000/landing-page/add', customer)
        .then(res => console.log(res.data));

        this.setState({
            customerFirstName: '',
            customerLastName: '',
            numberOfOrders: '0',
            contactNumber: '',
            customerAddress:'',
            productName:'',
            orderDate: '',
            price:'0',
            orderCode:'',
            productSize:'',
            deliveryType:'',
            productPic:'',
            downPayment:'',
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
        const { orders, size, sizeQuantity } = this.state;

        const handleChangeSelect = (index, event) => {
            console.log(index, event);
            const values = [...orders];
            values[index][event.target.name] = event.target.value;
            this.setState({orders: values});
        }

        const handleAddSize = () => {
            this.setState([...orders, {size:'', sizeQuantity}]);
        }

        const handleRemoveSize = (index) => {
            const values = [...orders];
            values.splice(index,1);
            this.setState({orders: values});
        }


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
                            <button className="btn btn-dark" onClick={()=>this.handleShow()}>Add</button>
                        </Col>
                    </Row>
                </Container>

         {/* Modal for adding new staff */}
            <Modal  show={this.state.show} onHide={()=>this.handleClose()} onSubmit={this.onSubmit}>
                <Modal.Body>
                    <Accordion style={{margin:"2%"}}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Customer Info</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Control
                                            style={{margin:'10% 0% 0% 0%'}}
                                            type="text"
                                            placeholder="First name"
                                            value={this.state.customerFirstName} 
                                            onChange={this.onChangefirstName} 
                                            required 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            style={{margin:'10% 0% 0% 0%'}}
                                            type="text"
                                            placeholder="Last name"
                                            value={this.state.customerLastName} 
                                            onChange={this.onChangeLastName} 
                                            required 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            style={{margin:'10% 0% 0% 0%'}}
                                            type="text"
                                            placeholder="Contact Number"
                                            required
                                        />
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
                    <Accordion style={{margin:"2%"}}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Customer's Order</Accordion.Header>
                            <Accordion.Body> <Mods  value={{}} /> </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                        {/* <Mods  value={{}} /> */}
                    <Button variant="secondary" onClick={()=>this.handleClose()}>
                        Close
                    </Button>

                    <button type="submit" className="btn btn-success mx-2">
                        Save Changes
                    </button>
                </Modal.Body >

            </Modal>
 
             {/* End of modal */}

             <Container>
                 <Row style={{textAlign:'center', marginTop:'30px'}}>
                     <Col>
                         <Table style={{marginBottom: "80px"}}>
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

export default LandingPage
