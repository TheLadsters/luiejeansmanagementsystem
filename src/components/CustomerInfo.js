import React from "react";
import {Modal, Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerInfo = () => {
    return(
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Contact Number"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Address"
                    required
                />
            </Form.Group >

            <Button variant="success" type="submit" block>
                Confirm
            </Button>
        </Form>
    );
}

export default CustomerInfo;