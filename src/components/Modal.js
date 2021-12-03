import React, {useState} from "react";
import {InputGroup,Dropdown , DropdownButton  ,Nav,Button, ButtonGroup, Container,Row,FormControl,Card,Col, FormLabel,ListGroup,ListGroupItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mods.css';
import Upload from '../images/add-files.svg';

const Mods = () => {
    const [newsize,setNewsize] = useState(false);
    const handleShow = () => setNewsize(true);
    const handleClose = () => setNewsize(false);

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
                <Card style={{ width: '50%'},{margin:'5% 20% 5% 20%'}}>
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
            <Container className="d-flex justify-content-between" style={{width:'35%'},{margin:'0% 0% 5%'}}>
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
            {/* <InputGroup className="mb-2">
                <InputGroup.Text> A </InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup> */}
            <Container className="flex-row-start" style={{margin:'10% 0% 10% 20%'},{padding:'0% 75% 0% 0%'}} >   
                <InputGroup className="" size="sm">
                    <DropdownButton className="" variant="primary" size="sm"  id="dropdown-basic-button" title="Add Size">
                        <Row className="justify-content-between">
                            <Dropdown.Header>Kids</Dropdown.Header>
                            <Dropdown.Item as={Col} href="#/action-1" id="14">14</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2" id="14">16</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/ac  tion-3" id="14">18</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-1" id="14">20</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2" id="14">22</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3" id="14">24</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3" id="14">26</Dropdown.Item>
                        </Row>
                        <Row className="justify-content-center">
                            <Dropdown.Header>Male</Dropdown.Header>
                            <Dropdown.Item as={Col} href="#/action-1">XS</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2">S</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">M</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-1">L</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2">XL</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">2XL</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">3XL</Dropdown.Item>
                        </Row>
                        <Row>
                        <Dropdown.Header>Female</Dropdown.Header>
                            <Dropdown.Item as={Col} href="#/action-1">XSf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2">Sf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">Mf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-1">Lf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-2">XLf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">2XLf</Dropdown.Item>
                            <Dropdown.Item as={Col} href="#/action-3">3XLf</Dropdown.Item>
                        </Row>
                    </DropdownButton>
                    <FormControl type="number" className="sizecount" aria-label="Text input with dropdown button" />
                </InputGroup>
            </Container>

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