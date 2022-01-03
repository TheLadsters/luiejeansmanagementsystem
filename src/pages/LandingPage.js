import React, { Component, createRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';  
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Container, Col, Row, Table, Button, 
        Modal,Accordion, Form,FormControl, Nav,
        Card, FormGroup, ButtonGroup, ListGroup   } from "react-bootstrap";
import * as IoIcons from 'react-icons/io';
import Upload from '../images/add-files.svg';
import Select from "react-select";
import IconButton from "@material-ui/core/IconButton";
import Mods from '../components/Modal';
import CustomerInfo from '../components/CustomerInfo';

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
        <td>{props.customer.orderCode} </td>
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

        this.picRef = createRef();

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangenumberOfOrders = this.onChangenumberOfOrders.bind(this);
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
            numberOfOrders: '0',
            contactNumber: '',
            customerAddress:'',
            productName:'',
            orderDate: '',
            price:'0',
            orderCode:'',
            productSize:'',
            deliveryType:'',
            productPic:'https://graciefernandina.com/wp-content/uploads/2017/04/default-image.jpg',
            downPayment:'',
            selectedFile:null,
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

    //  onChangedeliveryType(e) {
    //     this.setState({
    //         deliveryType: e.target.value
    //     });
    //  }

    onChangePickUp(e) {
        this.setState({
            deliveryType: "Pick-up"
        });
     }

     onChangeDelivery(e) {
        this.setState({
            deliveryType: "Delivery"
        });
     }

     onChangeproductPic(e) {
        this.setState({
            productPic: e
        });

        
     }

     onChangedownPayment(e) {
        this.setState({
            downPayment: e.target.value
        });
     }

     productPicClick() {
        this.picRef.current.click();
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

     postDetails = (pics) => {
        // if(!pics) {
        //     return setPicMessage("Please Select an Image");
        // }

        // setPicMessage(null);
        console.log(pics);
        if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
            const data = new FormData();
            data.append('file', pics)
            data.append('upload_preset', 'luiejeans')
            data.append('cloud_name', 'dhvbaxacn')
            fetch("https://api.cloudinary.com/v1_1/dhvbaxacn/image/upload", {
                method:"post",
                body:data,
            })
            .then((res) => res.json())
            .then((data) => {
                this.onChangeproductPic(data.url.toString()); 
                console.log("data succesfully uploaded");
            })
            .catch((err) => {
                console.log(err);
            });
        } else{
            // return setPicMessage("Please Select an Image");
        }
    };
    
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
            <Modal  show={this.state.show} onHide={()=>this.handleClose()}>
            <form onSubmit={this.onSubmit}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Customer Info</Accordion.Header>
                        <Accordion.Body>
                        {/* <CustomerInfo /> */}
                        {/* <form onSubmit={this.onSubmit}>
                                <Form.Control
                                    style={{margin:'10% 0% 0% 0%'}}
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    value={this.state.customerFirstName}
                                     onChange={this.onChangefirstName}
                                />

                                <Form.Control
                                    style={{margin:'10% 0% 0% 0%'}}
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    value={this.state.customerLastName} 
                                    onChange={this.onChangelastName}
                                />

                                <Form.Control
                                    style={{margin:'10% 0% 0% 0%'}}
                                    type="text"
                                    placeholder="Contact Number"
                                    required
                                    value={this.state.contactNumber} 
                                    onChange={this.onChangecontactNumber}
                                />

                                <Form.Control
                                    style={{margin:'10% 0% 0% 0%'}}
                                    type="text"
                                    placeholder="Address"
                                    required
                                    value={this.state.customerAddress} 
                                    onChange={this.onChangecustomerAddress}
                                />
                            <button type="submit" className="btn btn-success mx-2">
                            Save Changes
                            </button>
                            </form> */}
                        <div className="form-group">
                            <label>First Name </label>
                            <input type="text" value={this.state.customerFirstName} onChange={this.onChangefirstName} required className="form-control" />
                            <label>Last Name </label>
                            <input type="text"  value={this.state.customerLastName} onChange={this.onChangelastName} required className="form-control" />
                            <label>Contact Number </label>
                            <input type="text"  value={this.state.contactNumber} onChange={this.onChangecontactNumber} required className="form-control" />
                            <input type="hidden" value={this.state.numberOfOrders} onChange={this.onChangenumberOfOrders} required className="form-control" />
                            <label>Customer Address </label>
                            <input type="text"  value={this.state.customerAddress} onChange={this.onChangecustomerAddress} required className="form-control" />
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Modal.Body>

                    {/* <Mods/> */}
                <Container>
                    <Row className="d-flex justify-content-between" >
                        <Container style={{width:'30%'}}>
                            <Form.Group>
                                <Form.Control
                                    type="date"
                                    required
                                    placeholder="Deadline"
                                    value={this.state.orderDate} 
                                    onChange={this.onChangeorderDate}
                                />
                            </Form.Group>
                        </Container>
                                
                        <Container style={{width:'30%'}}>
                            <FormControl
                                placeholder="Order-Code"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={this.state.orderCode} 
                                onChange={this.onChangeorderCode}
                            />
                        </Container>

                        {/* <ButtonGroup as={Row} style={{width:'30%',margin:'0% 2%'}} size="sm">
                            <ButtonGroup as={Row} size="sm"> */}
                        <Container style={{width:'40%'}}>
                                {/* <Button className="w-50" variant = "success">P</Button>
                                <Button className="w-50" variant = "warning">D</Button> */}
                                <input className="form-check-input" value="Pick-up" onClick={this.onChangePickUp} type="radio" name="deliveryTypes" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                        Pick-up
                                 </label>

                                 <input className="form-check-input" value="Delivery" onClick={this.onChangeDelivery} type="radio" name="deliveryTypes" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                       Delivery
                                 </label>
                        </Container>
                            {/* </ButtonGroup>
                        </ButtonGroup> */}
                    </Row>
                    <Container className="d-flex mt-10">
                        <Card style={{ width: '100%',margin:'5% 20% 5% 20%'}}>
            
                                <Nav.Link className="bg-image hover-overlay ripple shadow-1-strong">
                                    <Card.Img className="" id="productPic" variant="top" src={Upload} onClick={() => this.productPicClick()} />
                                </Nav.Link>
                            <Form.Control type="file" onChange={(e) => this.postDetails(e.target.files[0])} ref={this.picRef} label="Upload Profile Picture" />
                            <ListGroup className="list-group-flush">
                                <FormControl
                                    placeholder="Product Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    size = "sm"
                                    value={this.state.productName} 
                                    onChange={this.onChangeproductName}
                                />
                            </ListGroup>
                        </Card>
                    </Container >
                    <Container className="d-flex justify-content-between" style={{width:'100%', margin:'0% 0% 5%'}}>
                        <Container className="d-inline-flex"    >
                            <label>Price: </label>
                            <FormControl
                                        className="w-50"
                                        placeholder="ex:1354"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        size = "sm"
                                        type = "number"
                                        value={this.state.price} 
                                    onChange={this.onChangeprice}
                            />
                        </Container>
                        <Container className="d-inline-flex" size="sm">
                            <label>Downpayment: </label>
                            <FormControl
                                        className="w-50"
                                        placeholder="ex:1354"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        size = "sm"
                                        type ="number"
                                        value={this.state.downPayment} 
                                    onChange={this.onChangedownPayment}
                            />
                        </Container>
                </Container>
                
                {/* {this.orders.map((order,index) =>{
                    return(
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
                    )
                })} */}

                <Container className="mt-0" style={{padding:'10 % 0% 5% 0%'}}>
                    <Row>
                        <Col>Quantity:  10</Col>
                        <Col>Total: 1000</Col>
                        <Col>Balance: 500</Col>
                    </Row>
                </Container>
        </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleClose()}>
                        Close
                    </Button>

                    <button type="submit" className="btn btn-success mx-2">
                        Save Changes
                    </button>
                </Modal.Footer>
        </form>
            </Modal>

            {/* <Modal show={this.state.showInfo} onHide={()=>this.handleCloseInfo()}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Customer Info
                    </Modal.Title>]
                </Modal.Header>
                <Modal.Body >
                    <CustomerInfo />
                </Modal.Body>
            </Modal>
             */}

             

             
             {/* End of modal */}

             <Container>
                 <Row style={{textAlign:'center', marginTop:'30px'}}>
                     <Col>
                         <Table style={{marginBottom: "80px"}}>
                                 <thead style={{backgroundColor:'grey', color:'white'}}>
                                     <tr>
                                     <th>Customer Name</th>
                                     <th>Order Code</th>
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
