import React from "react";
import {Button, ButtonGroup, Container,Row,FormControl,Modal,Col, FormLabel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';

const Mods = () => {
    return(
        <Container>
            <Row className="justify-content-start">
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
                    <ButtonGroup as={Row} className="w-50" size="sm">
                        <Button as={Col}className="w-50" variant = "primary">P</Button>
                        <Button className="w-50" variant = "secondary">D</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </Row>
            <Container className="d-flex flex-column">
                <div className="upload-photo"><h3>Upload Photo</h3></div>
                <input className="form-control" type="text" placeholder="product_name" />
            </Container>
            <div className="d-flex justify-content-between">
                <label>Downpayment</label><input className="form-control" />
                <label>Price</label><input className="form-control" />
                <label>Quantity</label><input className="form-control" />
                <label>Total</label><input className="form-control" />
            </div>
            <div className="d-flex justify-content-between">
                <label>14</label><input className="form-control" />
                <label>16</label><input className="form-control"/>
                <label>18</label><input className="form-control" />
                <label>20</label><input className="form-control" />
                <label>24</label><input className="form-control" />
                <label>26</label><input className="form-control" />
                <label>28</label><input className="form-control"/>
            </div>
            <div className="d-flex justify-content-between">
                <label>XS</label><input className="form-control" />
                <label>S</label><input className="form-control" />
                <label>M</label><input className="form-control" />
                <label>L</label><input className="form-control"/>
                <label>XL</label><input className="form-control"/>
                <label>2XL </label><input className="form-control" />
                <label>3XL</label> <input className="form-control" />
            </div>
            <Row>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-30" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-30" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-50" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-30" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-30" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-30" /></Col>
                    <FormLabel as={Col} column sm="1">XSf</FormLabel><Col><FormControl className="w-50" /></Col>
            </Row>
        </Container>
    );
}

export default Mods;