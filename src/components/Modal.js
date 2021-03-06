import React, {useState} from "react";
import {Nav , ButtonGroup, Container,Row,FormControl,Card,Col, ListGroup, Form, FormGroup,Accordion} from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mods.css';
import Upload from '../images/add-files.svg';
import Select from "react-select";
import { Radio, RadioGroup} from 'react-radio-group';

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


const Mods = () => {
    

    const [orders,setOrders] = useState([
        { size: '', sizeQuantity: ''},
    ])
    
    const handleChangeSelect = (index,event) => {
        console.log(index,event);
        const values = [...orders];
        values[index][event.target.name] = event.target.value;
        setOrders(values);
    }

    const handleAddSize = () => {
        setOrders([...orders, {size:'', sizeQuantity:''}]);
    }

    const handleRemoveSize = (index) => {
        const values = [...orders];
        values.splice(index,1);
        setOrders(values);
    }

    return(
        <Container>
            <Accordion style={{margin:"2%"}}>
                <Accordion.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                style={{margin:'10% 0% 0% 0%'}}
                                type="text"
                                placeholder="First name"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                style={{margin:'10% 0% 0% 0%'}}
                                type="text"
                                placeholder="Last name"
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
            </Accordion>
            <Row className="d-flex justify-content-between" >
                <Container style={{width:'42%'}}>
                    <Form.Group>
                        <Form.Control
                            type="date"
                            name="deadline"
                            required
                            placeholder="Deadline"
                        />
                    </Form.Group>
                </Container>
                        
                <Container style={{width:'35%'}}>
                    <FormControl
                        placeholder="Order-Code"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </Container>

                {/* <ButtonGroup as={Row} style={{width:'30%',margin:'0% -3% 0% 9%'}} size="sm">
                    <ButtonGroup as={Row} size="sm">
                        <Radio className="w-50" variant = "success">Pick-up</Radio>
                        <Radio className="w-50" variant = "warning">Delivery</Radio>
                    </ButtonGroup>
                </ButtonGroup> */}

                <RadioGroup as={Row} style={{width:'23%',margin:'-1% 0% 0% 0%'}} size="sm">
                    <div className="radio-button-background">
                        <Radio value="Pick-up" className="radio-button" />Pick-up
                    </div>
                    <div className="radio-button-background">
                        <Radio value="Deliver" className="radio-button" />Deliver
                    </div>
                </RadioGroup>
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
                                min = "0"
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
                                min = "0"
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
                                min = "0"
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
        </Container>
    );
}

export default Mods;