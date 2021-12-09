import React from 'react'
import"./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4> Luie Jeans Inc. </h4>
                    <ul className="list-unstyled">
                        <li>420-69420</li>
                        <li> Lapu-Lapu City, Cebu, Philippines </li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4> For Inquiries </h4>
                    <ul className="list-unstyled">
                        <li>Emali: ownerofthewebsite@luiejeans.com </li>
                    </ul>
                </div>

            



        
        </div>
        <hr />
        <div className="row">
            <p classname="col-sm">
                &copy;{new Date().getFullYear()} COPYRIGHT LuieJeans™  ALL RIGHTS RESERVED IS 3103
            </p>
        </div>
        </div>
        </div>
    )
}

export default Footer
