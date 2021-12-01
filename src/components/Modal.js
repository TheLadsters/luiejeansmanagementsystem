import React from "react";
import {Dropdown , DropdownButton  ,Nav,Button, ButtonGroup, Container,Row,FormControl,Card,Col, FormLabel,ListGroup,ListGroupItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import Upload from '../images/add-files.svg';

const Mods = () => {
    return(
        <Container>
            <Row className="justify-content-start" >
                <Container className="w-50 flex-row">
                    <FormControl
                        className="w-50"
                        placeholder="Order-Code"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        size = "sm"
                    />
                </Container>
                <ButtonGroup as={Row} className="w-50 flex-row-reverse" size="sm">
                    <ButtonGroup as={Row} className="w-50 " size="sm">
                        <Button as={Col}className="w-50" variant = "primary">P</Button>
                        <Button className="w-50" variant = "secondary">D</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </Row>
            <Container className="d-flex justify-content-center">
                <Card style={{ width: '50%' }}>
                    <Nav>
                        <Nav.Link href="/"><Card.Img className="" variant="top" src={Upload} /></Nav.Link>
                    </Nav>
                    <ListGroup className="list-group-flush">
                        <FormControl
                            placeholder="Order-Code"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            size = "sm"
                        />
                    </ListGroup>
                </Card>
                    {/* <div className="upload-photo"src="holder.js/171x180" thumbnailxs={6} md={4}><h3>Upload Photo</h3></div>
                    <input className="form-control" type="text" placeholder="product_name" /> */}
            </Container>
            <Container className="d-flex justify-content-between">
                <label>Price</label>
                <FormControl
                            className="w-50"
                            placeholder="ex:1354"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            size = "sm"
                />
                <label>Downpayment</label>
                <FormControl
                            className="w-50"
                            placeholder="ex:1354"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            size = "sm"
                />
            </Container>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
}

export default Mods;