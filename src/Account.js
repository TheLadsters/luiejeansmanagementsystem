import React, { useState } from 'react';
import { Button} from "react-bootstrap";
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Box from '@material-ui/core/Box'
import PhoneInput from 'react-phone-number-input'
import '../components/ProfilePage.css'



const Account = () => {
  

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Modal1, setModal1] = useState(false);
    const [Modal2, setModal2] = useState(false);
    const [Modal3, setModal3] = useState(false);
    const [Modal4, setModal4] = useState(false);
    const [Modal5, setModal5] = useState(false);
    const [value, setValue] = useState();
    return (
    <>
            
        
        <Navbar />

        <div className="background">
      {/* MODAL SETUP (name change) */}
<Modal className="Modal1" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'


},
content: {
    position: 'absolute',
    bottom:'450px',
    left: '700px',
    top: '200px',
    width: '26%',
    border: '1px solid #ccc',
    background: '#fff',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    padding: '20px'
}
}}>

{/* <CloseButton onClick={() => setModalIsOpen(false)} className="closebutton" /> */}

  <h2> <center> Edit your name </center> </h2>
  <p> Change Name: <input type="text" className="NameEdit" placeholder="Input your name"/> </p>

     <p> Password: <input type="password" className="pazWord" placeholder="Input your password to confirm"/> </p>
  <div>
    <Button className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModalIsOpen(false)}> Close </Button>
  </div>

 </Modal>
{/* SECOND MODAL (password change)*/}
 <Modal isOpen={Modal1} onRequestClose={() => setModal1(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
position: 'absolute',
bottom:'450px',
left: '600px',
top: '200px',
width: '35%',
border: '1px solid #ccc',
background: '#fff',
overflow: 'auto',
WebkitOverflowScrolling: 'touch',
borderRadius: '10px',
padding: '15px'
}
}}>

 
  <h2> <center>  Change your Password: </center> </h2>
  <p> Old password: <input type="password" name="oldPass" className="passStyle" /> </p>
  <p> New password: <input type="password" name="oldPass" className="passStyle"/> </p>
  <p> Confirm your new password: <input type="password" name="password" className="passStyle"/> </p>
  <div>
     <Button className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModal1(false)}> Close </Button>
  </div>

 </Modal>

{/* THIRD MODAL (phone numbers) */}

<Modal isOpen={Modal2} onRequestClose={() => setModal2(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
  position: 'absolute',
  bottom:'420px',
  left: '700px',
  top: '200px',
  width: '26%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '15px'
}
}}>

<center> 
  <h2> Change your Phone Number </h2>

<div>  <PhoneInput className="phone" 
        placeholder="+63"
        defaultCountry="PH"
        value={value} 
        onChange={setValue} />
       <p>Your phone number will be: {value} </p>
       <p className="adj"> Category: </p>
       <select name="language" id="lang">
       <option value="" disabled selected hidden> Select Category </option>
                            <option value="0">Mobile</option>
                            <option value="1">Work</option>
                            <option value="2">Landline</option>
                            </select> 
        </div>
       
  <div>
     <Button className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModal2(false)}> Close </Button>
    
  </div>
  </center>
 </Modal>
 {/* FOURTH MODAL (home address) */}

 <Modal isOpen={Modal3} onRequestClose={() => setModal3(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
position: 'absolute',
bottom:'325px',
left: '600px',
top: '200px',
width: '40%',
border: '1px solid #ccc',
background: '#fff',
WebkitOverflowScrolling: 'touch',
borderRadius: '10px',
padding: '15px'
}
}}>

 
 <center>
  <h2> Add a new address: </h2>
  <p> <input type="text" className="stName" placeholder="Street name, house number, subdivision"/> </p>
  <p> <input type="text"  className="Brgy" placeholder="Barangay"/> </p>
  <p> <input type="text" className="cityMun" placeholder="City / Municipality"/> </p>
  <p> <input type="text" pattern="[0-9]{5}" className="zipp" placeholder="Zip Code"/> </p>
  <div>
      
     <Button className="SubmitBut"> Submit </Button>
     
    <Button className="CloseBut" onClick={() => setModal3(false)}> Close </Button>
  </div>
    </center>
 </Modal>

 {/* SIXTH MODAL (EMAIL ADD) */}
 <Modal isOpen={Modal5} onRequestClose={() => setModal5(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
position: 'absolute',
bottom:'350px',
left: '600px',
top: '200px',
width: '40%',
border: '1px solid #ccc',
background: '#fff',
WebkitOverflowScrolling: 'touch',
borderRadius: '10px',
padding: '15px'
}
}}>

 
 <center>
  <h2> Add a new Email address: </h2>
  <p> <input type="text" className="stName" placeholder="example@example.com"/> </p>
  <div>
      
     <Button className="SubmitBut"> Submit </Button>
     
    <Button className="CloseBut" onClick={() => setModal5(false)}> Close </Button>
  </div>
    </center>
 </Modal>
 
{/* END OF MODAL SETUP */}

      <h1> <center> Profile Page </center> </h1>
    
            <div style={{marginLeft: '25%', marginTop: '35px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={4} fontFamily="verdana"> 
                   
                        <Box color="black" bgcolor="white" p={0} fontFamily="verdana"> Credentials </Box>
                   
                       
                        <Box p={1}> </Box>
                      
                       
                       <td> Name: </td>

                    <td> <Box p={0} fontFamily="verdana"> <Button className="nameButton" onClick={() => setModalIsOpen(true)}> + Edit your name </Button> </Box> </td>
                   
                    <Box p={1}> </Box>
                 
                     <Box p={0}> Joined in:  </Box>  
                  
   
                </Box>
                </div>

                <div style={{marginLeft: '25%', marginTop: '35px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>
                    
                   Account Options:
                   <Box p={1}> </Box>
                  
                    <td> 
                   <Box> 
                      
                       Language: <select name="language" id="lang">
                            <option value="" disabled selected hidden>Select Option</option>
                            <option value="engUS">English (US)</option>
                            <option value="engUK">English (UK)</option>
                          
                            </select></Box>
      
                    </td> 
                    <Box p={1}> </Box>
                   <td>            
                <Box> Time Zone:   
                            <select name="gmt" id="time">
                            <option value="" disabled selected hidden> Select Option </option>
                            <option value="gmt+7">(GMT +7:00) Cambodia / Indonesia</option>
                            <option value="gmt+8">(GMT +8:00) Philippines / Singapore</option>
                            <option value="gmt+9">(GMT +9:00) Korea / Japan</option>
                            
                            </select>
                          
                            </Box>
  
                          </td>
                    <Box p={1}> </Box>
                    <td>
          
                        <Box> Change your password? <Button className="passChange" onClick={() => setModal1(true)}> Edit </Button></Box>
                        </td>
                        
                        <Box p={1}> </Box> 
            
               
                </Box>

                
                       
            </div>
            <div style={{marginLeft: '51%', marginTop: '-522px', width: '25%'}} className="text">
            
                <Box color="black" bgcolor="White" p={5}>   
                <td> 
                    Addresses:
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Box><Button className="submitButton" onClick={() => setModal3(true)}> + Add a home address? </Button> </Box>
                    
                </Box>
    
            </div>
            <div style={{marginLeft: '51%', marginTop: '44px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Email Addresses: 
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Button className="submitButton" onClick={() => setModal5(true)}> + Add another email address? </Button>
                   
                    
                </Box>
      
            </div>

            <div style={{marginLeft: '51%', marginTop: '40px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Phone Numbers:
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Button className="submitButton" onClick={() => setModal2(true)}> + Add another phone number? </Button>
                  
                </Box>
          
            </div>

            <div style={{marginLeft: '0%', marginTop: '0px', width: '0%'}} className="text">
                <Box color="black" bgcolor="White" p={1}>
                </Box>
            
            </div>

           
            
            
        </div>
                  
       
    </>
    )
}

export default Account
