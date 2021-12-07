import React from "react";
import {Form,Nav ,Button, ButtonGroup, Container,Row,FormControl,Card,Col, ListGroup, FormGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mods.css';
import Upload from '../images/add-files.svg';

// function changeBtn(ID,sizebtn) {
//     this.ID = ID;
//     this.sizebtn.title =  ID;
// }

const Mods = () => {
    // const [newsize,setNewsize] = useState(false);
    // // const handleShow = () => setNewsize(true);
    // // const handleClose = () => setNewsize(false);

    return(
        <Container>
            <Row className="justify-content-start m-0" >
                <Container className="w-50 flex-row">
                    <FormControl    
                        className="w-50"
                        placeholder="Order-Code"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        size = "sm"
                    />
                </Container>
                <ButtonGroup as={Row} className="w-50 flex-row-reverse m-0" size="sm">
                    <ButtonGroup className="w-50" as={Row} size="sm">
                        <Button className="w-50" variant = "primary">P</Button>
                        <Button className="w-50" variant = "secondary">D</Button>
                    </ButtonGroup>
                    
                </ButtonGroup>
            </Row>
            <Container className="d-flex justify-content-center mt-10">
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
                    {/* <div className="upload-photo"src="holder.js/171x180" thumbnailxs={6} md={4}><h3>Upload Photo</h3></div>
                    <input className="form-control" type="text" placeholder="product_name" /> */}
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
                <FormGroup className="w-50 d-flex flex-col formSelect">  
                <Form.Select className=" w-50" name="timezones" id="timezones">
                        <optgroup label="size">
                            <option value="1">14</option>
                            <option value="2">16</option>
                            <option value="3">18</option>
                            <option value="3">20</option>
                            <option value="1">22</option>
                            <option value="2">24</option>
                            <option value="3">26</option>
                        </optgroup>
                        <optgroup label="male-size">
                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">M </option>
                            <option value="3">L</option>
                            <option value="3">XL</option>
                            <option value="3">2XL</option>
                            <option value="3">3XL</option>
                        </optgroup>
                        <optgroup label="female-size">
                            <option value="1">XSf</option>
                            <option value="2">Sf</option>
                            <option value="3">Mf</option>
                            <option value="3">Lf</option>
                            <option value="3">XLf</option>
                            <option value="3">2XLf</option>
                            <option value="3">3XLf</option>
                        </optgroup>
                        
                    </Form.Select>
                
                    <Form.Control
                                id="size-quantity"
                                type="number"
                                placeholder="12345"
                                className="w-50"
                    />
                </FormGroup>
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