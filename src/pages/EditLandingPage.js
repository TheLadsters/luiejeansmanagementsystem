import React, { Component, createRef } from 'react';
import { Form, Container, FormControl, ListGroup, ButtonGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import * as FaIcons from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';  
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export class EditLandingPage extends Component {


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
            customerAddress:'',
            productName:'',
            orderDate: new Date(),
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
        const thePath = window.location.pathname;
        const editId = thePath.substring(thePath.lastIndexOf('/') + 1)
        this.deliverRef = createRef();
        this.pickupRef = createRef();
        
        axios.get('http://localhost:5000/landing-page/'+editId)
        .then(response=>{

            if(response.data.deliveryType == "Delivery"){
                this.deliverRef.current.click();
                console.log(this.deliverRef);
                console.log("hello delivery!");
            }

            if(response.data.deliveryType == "Pick-up"){
                this.pickupRef.current.click();
                console.log("hello pick-up!");
            }

            

            this.setState({
                customerFirstName: response.data.customerFirstName,
                customerLastName: response.data.customerLastName,
                contactNumber: response.data.contactNumber,
                customerAddress:response.data.customerAddress,
                productName:response.data.productName,
                orderDate: new Date(response.data.orderDate),
                price:response.data.price,
                orderCode:response.data.orderCode,
                productSize:response.data.productSize,
                deliveryType:response.data.deliveryType,
                productPic:response.data.productPic,
                downPayment:response.data.downPayment,
            })
        })
        .catch(function(error) {
            console.log(error);
        })
        axios.get('http://localhost:5000/landing-page/')
        .then(response => {
            this.setState({ customers: response.data })
        })
        .catch((error) => {
            console.log(error);
        })  
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

    onChangeorderDate(date) {
        this.setState({
            orderDate: date
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
        const thePath = window.location.pathname;
        const editId = thePath.substring(thePath.lastIndexOf('/') + 1)
        e.preventDefault();
        const customer = {
            customerFirstName: this.state.customerFirstName,
            customerLastName: this.state.customerLastName,
            numberOfOrders: this.state.numberOfOrders,
            contactNumber: this.state.contactNumber,
            customerAddress: this.state.customerAddress,
            productName: this.state.productName,
            orderDate: new Date(this.state.orderDate),
            price: this.state.price,
            orderCode: this.state.orderCode,
            productSize: this.state.productSize,
            deliveryType: this.state.deliveryType,
            productPic: this.state.productPic,
            downPayment: this.state.downPayment
        }


        console.log(customer);
        axios.post('http://localhost:5000/landing-page/update/'+editId, customer)
        .then(res => console.log(res.data));

        window.location = '/landing-page';
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
        return (
            <>
                <Navbar />
            <Container style={{marginTop:"40px", marginBottom:"60px"}} className="col-md-4 col-md-offset-8">
                <Form onSubmit={this.onSubmit} style={{width:"500px"}}>
                <Row>
                    <Col>
                    <h1>Edit Orders</h1>
                    </Col>

                    <Col style={{textAlign:"right", marginTop:"20px"}}>
                    <Button variant="dark" href="/landing-page">
                    <FaIcons.FaBackward />
                    <br></br>
                    Back
                    </Button>
                    </Col>
                </Row>
                
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                required
                                value={this.state.customerFirstName} 
                                onChange={this.onChangefirstName}
                            />
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                        <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                required
                                value={this.state.customerLastName} 
                                onChange={this.onChangelastName}
                            />
                    </Form.Group>
                    
                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                        <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contact Number"
                                required
                                value={this.state.contactNumber} 
                                onChange={this.onChangecontactNumber}
                            />
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                        <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                required
                                value={this.state.customerAddress} 
                                onChange={this.onChangecustomerAddress}
                            />
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                    <Form.Label>Product Date</Form.Label>
                            {/* <Form.Control
                                type="date"
                                required
                                placeholder="Deadline"
                                value={this.state.orderDate} 
                                onChange={this.onChangeorderDate}
                            /> */}
                             <DatePicker
                                selected={this.state.orderDate}
                                 onChange={this.onChangeorderDate}
                        />
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                    <Form.Label>Order Code</Form.Label>
                            <FormControl
                                placeholder="Order-Code"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={this.state.orderCode} 
                                onChange={this.onChangeorderCode}
                            />
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                    <Form.Label>Delivery Type</Form.Label>
                    <br />
                            <input className="form-check-input" ref={this.pickupRef} value="Pick-up" onClick={this.onChangePickUp} type="radio" name="deliveryTypes" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                    Pick-up
                                </label>

                            <input className="form-check-input" ref={this.deliverRef} value="Delivery" style={{marginLeft:"10px"}} 
                            onClick={this.onChangeDelivery} type="radio" name="deliveryTypes" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Delivery
                            </label>
                    </Form.Group>

                    <Form.Group style={{marginBottom:"10px", marginTop:"40px"}}>
                    <img src={this.state.productPic} width="100px" height="100px" />
                    <br></br>
                    <Form.Label>Product Picture</Form.Label>
                        <Form.Control type="file" onChange={(e) => this.postDetails(e.target.files[0])} ref={this.picRef} label="Upload Profile Picture" />
                    </Form.Group>

                    <ListGroup className="list-group-flush">
                    <Form.Label>Product Name</Form.Label>
                                <FormControl
                                    placeholder="Product Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    size = "sm"
                                    value={this.state.productName} 
                                    onChange={this.onChangeproductName}
                                />
                    </ListGroup>

                    <Form.Group style={{marginBottom:"10px", marginTop:"10px"}}>
                    <Form.Label>Price</Form.Label>
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
                    </Form.Group>

                    <Form.Group style={{marginTop:"10px"}}>
                    <Form.Label>Downpayment</Form.Label>
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
                    </Form.Group>

                    <ButtonGroup style={{marginTop:"20px"}}>
                    <Button variant="secondary" onClick={()=>this.handleClose()}>
                        Close
                    </Button>

                    <button type="submit" className="btn btn-success mx-2">
                        Save Changes
                    </button>
                    </ButtonGroup>

                </Form>
            </Container>
            </>
        )
    }
}

export default EditLandingPage
