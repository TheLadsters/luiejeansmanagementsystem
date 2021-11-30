import React from "react";
import './Modal.css';

function Modal(props) {
    return (props.trigger) ? (
        <div className="outer-box">
            <div className="inner-box-head">
                <button className="customer-info">Customer Info</button>
                <input className="deadline" type="text" placeholder="deadline" />
            </div>
            <div className="inner-box-body">
                <div className="inner-box-head">
                    <input className="order-code" type="text" placeholder="Order Code" />
                    <div className="delivery-type">
                        <button className="pick-up">P</button>
                        <button className="deliver">D</button>
                    </div>
                    </div>
                        <div className="product-photo-name">
                        <div className="upload-photo"><h3>sdfadfa</h3></div>    
                        <div className="product-name">
                            <input className="product-name-name" type="text" placeholder="product_name" />
                        </div>
                    </div>
                    <div className="Total">
                        <label>Downpayment</label><input className="downpayment" />
                        <label>Price</label><input className="price" />
                        <label>Quantity</label><input className="quantity" />
                        <label>Total</label><input className="total" />
                    </div>
                    <div className="row">
                        <label>14</label><input className={14} />
                        <label>16</label><input className={14} />
                        <label>18</label><input className={18} />
                        <label>20</label><input className={20} />
                        <label>24</label><input className={24} />
                        <label>26</label><input className={26} />
                        <label>28</label><input className={28} />
                    </div>
                    <div className="row">
                        <label>XS</label><input className="XS" />
                        <label>S</label><input className="S" />
                        <label>M</label><input className="M" />
                        <label>L</label><input className="L" />
                        <label>XL</label><input className="XL" />
                        <label>2XL </label><input className="XXL" />
                        <label>3XL</label> <input className="XXXL" />
                    </div>
                    <div className="row">
                        <label>XSf</label><input className="XSf" />
                        <label>Sf</label><input className="Sf" />
                        <label>Mf</label><input className="Mf" />
                        <label>Lf</label><input className="Lf" />
                        <label>XLf</label><input className="XLf" />
                        <label>2XLf</label><input className="XXLf" />
                        <label>3XLf</label><input className="XXXLf" />
                    </div>
                </div>
            <div className="AddCancel">
                <div className="AddCancel1">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}> Cancel </button>
                    {props.children}
                    <button> Add </button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Modal;