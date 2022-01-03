import React, { useState, useEffect } from 'react';
import { Button} from "react-bootstrap";
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Box from '@material-ui/core/Box'
import PhoneInput from 'react-phone-number-input'
import '../components/ProfilePage.css'
import axios from 'axios';

const Account = () => {
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Modal1, setModal1] = useState(false);
    const [Modal2, setModal2] = useState(false);
    const [Modal3, setModal3] = useState(false);
    const [Modal5, setModal5] = useState(false);
    const [value, setValue] = useState();
    const [Modal4, setModal4] = useState();
    const [inputs, setInputs] = useState({});

    const userInfo = localStorage.getItem('userInfo');
    const newInfo = JSON.parse(userInfo);

    const handleChange = (event) =>{
      const name = event.target.name;
      const value =  event.target.value;
      setInputs (values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(inputs);
    }


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
  bottom:'180px',
  left: '340px',
  top: '150px',
  width: '52%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
}
}}>

{/* <CloseButton onClick={() => setModalIsOpen(false)} className="closebutton" /> */}
<center>
  <h2>  Edit your name </h2>
 <form onSubmit={handleSubmit}>
  <p> Change Name: <input type="text" className="NameEdit" value={inputs.name} onChange={handleChange} /> </p>

     <p>Password:<input type="password" className="pazWord" placeholder="Input your password to confirm"/> </p>
  <div>
    <Button variant="none" className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModalIsOpen(false)}> Close </Button>
    
  </div>
  </form>
  </center> 
 </Modal>
{/* SECOND MODAL (password change)*/}
 <Modal isOpen={Modal1} onRequestClose={() => setModal1(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
  position: 'absolute',
  bottom:'180px',
  left: '340px',
  top: '150px',
  width: '52%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
}
}}>

  <center> 
  <h2>  Change your Password: </h2>
  <p> Old password: <input type="password"  className="passStyle" /> </p>
  <p> New password: <input type="password" placeholder='number, character, letter' className="passStyle"/> </p>
  
  <div>
     <Button variant="none" className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModal1(false)}> Close </Button>
  </div>
  </center>
 </Modal>

{/* THIRD MODAL (phone numbers) */}

<Modal isOpen={Modal2} onRequestClose={() => setModal2(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
  position: 'absolute',
  bottom:'150px',
  left: '340px',
  top: '150px',
  width: '52%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
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
       <select name="language" id="lang2">
       <option value="" disabled selected hidden> Select Category </option>
                            <option value="0">Mobile</option>
                            <option value="1">Work</option>
                            <option value="2">Landline</option>
                            </select> 
        </div>
       
  <div>
     <Button variant="none" className="SubmitBut"> Submit </Button>
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
  bottom:'120px',
  left: '340px',
  top: '90px',
  width: '52%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
}
}}>

 
 <center>
  <h2> Add a new address: </h2>
  <p> <input type="text" className="stName" placeholder="Street name, house number, subdivision" onChange={handleChange}/> </p>
  <p> <input type="text"  className="Brgy" placeholder="Barangay" onChange={handleChange}/> </p>
  <p> <input type="text" className="cityMun" placeholder="City / Municipality" onChange={handleChange}/> </p>
  <p> <input type="number"  className="zipp" placeholder="Zip Code" onChange={handleChange}/> </p>
  <div>
      
     <Button variant="none" className="SubmitBut"> Submit </Button>
     
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
  bottom:'220px',
  left: '340px',
  top: '120px',
  width: '52%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
}
}}>

 
 <center>
  <h2> Add a new Email address: </h2>
  <p> <input type="text" className="stName" placeholder="example@example.com" onChange={handleChange}/> </p>
  <div>
      
     <Button variant="none" className="SubmitBut"> Submit </Button>
     
    <Button className="CloseBut" onClick={() => setModal5(false)}> Close </Button>
  </div>
    </center>
 </Modal>
{/* ROLES MODAL */}
 <Modal isOpen={Modal4} onRequestClose={() => setModal4(false)}
style={{
    overlay: {
 backgroundColor: 'rgba(128,128,128, 0.5)'

},
content: {
  position: 'absolute',
  bottom:'150px',
  left: '380px',
  top: '150px',
  width: '45%',
  border: '1px solid #ccc',
  background: '#fff',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '10px',
  padding: '20px'
}
}}>

  <center> 
  <h2>  Select Roles </h2>
<p> Select Employee:
  <select id="lang">
      <option value="role1"> test</option>
      <option value="role1">  test</option>
      <option value="role1"> test  </option>
      <option value="role1">  test </option>
    </select>
    </p>
    <select id="lang">
      <option value="role1"> Tailor </option>
      <option value="role1"> Seamstress </option>
      <option value="role1"> Printer </option>
      <option value="role1"> Delivery </option>
    </select>
 

  <div>
     <Button variant="none" className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => setModal4(false)}> Close </Button>
  </div>
  </center>
 </Modal>
 
{/* END OF MODAL SETUP */}

      <h1> <center> Profile Page </center> </h1>
    
            <div style={{marginLeft: '25%', marginTop: '0px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={4} fontFamily="verdana"> 
                   
                        <Box color="black" bgcolor="white" p={0} fontFamily="verdana"> Credentials </Box>
                   
                       
                        <Box p={1}> </Box>
                      
                       
                       <td> Name: {newInfo.name} </td>

                    <td> <Box p={0} fontFamily="verdana"> <Button className="nameButton" variant="light" onClick={() => setModalIsOpen(true)}> + Edit your name </Button> </Box> </td>
                   
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
                            <option value="" disabled selected hidden> (GMT +8:00) Philippines / Singapore </option>
                            <option value="gmt+8">(GMT +8:00) Philippines / Singapore</option>
                            </select>
                          
                            </Box>
  
                          </td>
                    <Box p={1}> </Box>
                    <td>
          
                        <Box> Change your password? <Button className="passChange" variant="light" onClick={() => setModal1(true)}> Edit </Button></Box>
                        </td>
                       
                        <Box p={1}> </Box> 
            
                        <Box> Employee roles <Button className="roles" variant="light" onClick={() => setModal4(true)}> Select Roles </Button></Box>
                        
                </Box>

                
                       
            </div>
            <div style={{marginLeft: '51%', marginTop: '-589px', width: '25%'}} className="text">
            
                <Box color="black" bgcolor="White" p={5}>   
                <td> 
                    Addresses:
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Box><Button className="submitButton" variant="light" onClick={() => setModal3(true)}> + Add a home address? </Button> </Box>
                    
                </Box>
    
            </div>
            <div style={{marginLeft: '51%', marginTop: '42px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Email Addresses: 
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Button className="submitButton" variant="light" onClick={() => setModal5(true)}> + Add another email address? </Button>
                   
                    
                </Box>
      
            </div>

            <div style={{marginLeft: '51%', marginTop: '40px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Phone Numbers:
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Button className="submitButton" variant="light" onClick={() => setModal2(true)}> + Add another phone number? </Button>
                  
                </Box>
          
            </div>

            <div style={{marginLeft: '0%', marginTop: '-6px', width: '0%'}} className="text">
                <Box color="black" bgcolor="White" p={1}>
                </Box>
            
            </div>

           
         
            
        </div>
                  
       
    </>
    )
}

export default Account
