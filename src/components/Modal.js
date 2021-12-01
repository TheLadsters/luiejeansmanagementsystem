import React from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';

const Mods = () => {
    return(
        <div className="d-flex  flex-md-column modal-fade">
            <div className="d-flex flex-lg-column" >
                <ButtonGroup>
                    <Button variant = "primary">P</Button>
                    <Button variant = "secondary">D</Button>
                </ButtonGroup>
                <div className="d-flex flex-column">
                    <div className="upload-photo"><h3>Upload Photo</h3></div>
                    <input className="form-control" type="text" placeholder="product_name" />
                </div>
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
                <div className="d-flex justify-content-between">
                    <label>XSf</label><input className="form-control" />
                    <label>Sf</label><input className="form-control" />
                    <label>Mf</label><input className="form-control"/>
                    <label>Lf</label><input className="form-control" />
                    <label>XLf</label><input className="form-control" />
                    <label>2XLf</label><input className="form-control" />
                    <label>3XLf</label><input className="form-control" />
                </div>
            </div>
        </div>
    );
}

export default Mods;