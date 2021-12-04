import React from "react";
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerInfo = () => {
    return(
        <Form>
            <Form.Group>
                <Form.Control
                    style={{margin:'10% 0% 0% 0%'}}
                    type="text"
                    placeholder="Name"
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
            </Form.Group >

            <Button variant="success" type="submit" lock style={{margin:'10% 0% 0% 0%'}}>
                Confirm
            </Button>
        </Form>
    );
}

export default CustomerInfo;