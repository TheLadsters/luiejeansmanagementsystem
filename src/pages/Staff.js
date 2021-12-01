import React from 'react'
import Navbar from '../components/Navbar';
import { Button, Container, Col, Row } from "react-bootstrap";
import Cards from '../components/Cards';
import * as IoIcons from 'react-icons/io';


const Staff = () => {

    return (
        <>
        <Navbar />

            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1 style={{textAlign:"center"}}>Staff</h1>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <input type="text" className="my-2 w-25" placeholder="Search a Staff Member"/>
                        <Button variant="primary" className="mx-2">
                        <IoIcons.IoIosSearch />Search
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Cards />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Staff
