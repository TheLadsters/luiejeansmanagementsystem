import React, { useState, useEffect } from 'react';
import { Button, Form, Col} from "react-bootstrap";
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Box from '@material-ui/core/Box'
import PhoneInput from 'react-phone-number-input'
import '../components/ProfilePage.css';
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading"
import axios from 'axios';
import Select from 'react-select';
import moment from 'moment';

const Account = () => {
 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Modal1, setModal1] = useState(false);
    const [Modal2, setModal2] = useState(false);
    const [Modal3, setModal3] = useState(false);
    const [Modal5, setModal5] = useState(false);
    const [value, setValue] = useState();
    const [Modal4, setModal4] = useState();
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState(""); 
    const [changePassword, setChangePassword] = useState(""); 
    const [role, setRole] = useState("");
    const [message, setMessage] = useState(null);
    const [confirmpassword, setConfirmPassword] = useState("");
    const [updateSuccess, setUpdateSuccess] = useState(null);

    const Roles = [
      { label: "Designer", value: "Designer" },
      { label: "Seamstress", value: "Seamstress" },
      { label: "Tailor", value: "Tailor" },
      { label: "Packager", value: "Packager" },
      { label: "Printer", value: "Printer" },
  ]

    const userInfo = localStorage.getItem('userInfo');
    const newInfo = JSON.parse(userInfo);
    const emailUser = newInfo.email;

    const handleChange = (event) =>{
      const name = event.target.name;
      const value =  event.target.value;
      setInputs (values => ({...values, [name]: value}))
    }
    const formattedDate = moment(newInfo.createdAt).utc().format('MM/DD/YYYY')
    
    // function to handle editing of Account Name
    const handleSubmitName = async (e) =>{
      e.preventDefault();

      try{
        const config = {
            headers: {
            "Content-type": "application/json",
            },
        };

        setLoading(true);

    const { data } = await axios.post(
        "http://localhost:5000/users/editName",
        {
            name,password, emailUser
        },
        config
    );
        localStorage.removeItem("userInfo");
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUpdateSuccess("You have Updated Info Successfully!");
        setLoading(false);
        setError(null);
        setName("");
        setPassword("");


    } catch (error){
        setError(error.response.data.message);
        setLoading(false)
    }
}

   // function to handle editing of Password
   const handleSubmitPassword = async (e) =>{
    e.preventDefault();

      try{
        const config = {
            headers: {
            "Content-type": "application/json",
            },
        };

        setLoading(true);

    const { data } = await axios.post(
        "http://localhost:5000/users/editPassword",
        {
            password, changePassword, emailUser
        },
        config
    );
        localStorage.removeItem("userInfo");
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUpdateSuccess("You have Updated Password Successfully!");
        setLoading(false);
        setError(null);
        setChangePassword("");
        setPassword("");


    } catch (error){
        setError(error.response.data.message);
        setLoading(false)
    }
}

const handleSubmitRole = async (e) =>{
  e.preventDefault();

  try{
    const config = {
        headers: {
        "Content-type": "application/json",
        },
    };

    setLoading(true);

const { data } = await axios.post(
    "http://localhost:5000/users/editRole",
    {
        role, emailUser
    },
    config
);
    localStorage.removeItem("userInfo");
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUpdateSuccess("You have Updated Info Successfully!");
    setLoading(false);
    setError(null);
    setName("");
    setPassword("");


  } catch (error){
      setError(error.response.data.message);
      setLoading(false)
  }
}

 function onChangeRole(role){
        setRole(role.value);
    }
    const [tasks, setTasks] = useState([]);


  const [staff, setStaff] = useState([]);
  useEffect(() => {
      axios
      .get("http://localhost:5000/users")
      .then(res => setStaff(res.data))
      .catch(error => console.log(error));
  },[setStaff]);

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
{updateSuccess && <ErrorMessage variant="success">{updateSuccess}</ErrorMessage>}
{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
{loading && <Loading />}  
{/* <CloseButton onClick={() => setModalIsOpen(false)} className="closebutton" /> */}
<center>
  <h2>  Edit your name </h2>
 <form onSubmit={handleSubmitName}>
  <p> Change Name: <input type="text" className="NameEdit" value={name} onChange={(e) => setName(e.target.value)} required/> </p>

     <p>Password:<input type="password" className="pazWord" value={password}
      onChange={(e) => setPassword(e.target.value)} placeholder="Input your password to confirm" required/> </p>
  <div>
    <Button type="submit" variant="none" className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => 
      {setModalIsOpen(false); setUpdateSuccess(null);
      setError(null)
      }}> 
      Close 
    </Button>
    
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
  {updateSuccess && <ErrorMessage variant="success">{updateSuccess}</ErrorMessage>}
  {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
  {loading && <Loading />}  
  <Form onSubmit={handleSubmitPassword}>
  <h2>  Change your Password: </h2>
  <p> Old password: <input type="password" value={password}  className="passStyle" onChange={(e) => setPassword(e.target.value)}/> </p>
  <p> New password: <input type="password" placeholder='number, character, letter' className="passStyle"
  value ={changePassword} onChange={(e) => setChangePassword(e.target.value)}/> </p>
  <div>
     <Button variant="none" type="submit" className="SubmitBut"> Submit </Button>
    <Button className="CloseBut" onClick={() => 
      {setModal1(false); setUpdateSuccess(null);
      setError(null)
      }}> Close </Button>
  </div>
  </Form>
  </center>
 </Modal>
{/* END OF SECOND MODAL (password change)*/}


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
  <form>
  <p> <input type="text" className="stName" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/> </p>
  <div>
      
     <Button variant="none" className="SubmitBut"> Submit </Button>
     
    <Button className="CloseBut" onClick={() => setModal5(false)}> Close </Button>
  </div>
  </form>
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
{/* <p> Select Employee:
  <select id="lang">
      <option value="role1"> miss feat </option>
      <option value="role1"> miss feat </option>
      <option value="role1">  miss feat </option>
      <option value="role1">  miss feat </option>
    </select>
    </p> */}
    {/* <select id="lang">
      <option value="role1"> Tailor </option>
      <option value="role1"> Seamstress </option>
      <option value="role1"> Printer </option>
      <option value="role1"> Delivery </option>
    </select> */}
  <Form  onSubmit={handleSubmitRole}>
  {updateSuccess && <ErrorMessage variant="success">{updateSuccess}</ErrorMessage>}
{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <Form.Group className="mb-3" controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        <Select options={Roles} onChange={onChangeRole}/>
      </Form.Group>
    <div>
      <Button variant="none" type="submit" className="SubmitBut"> Submit </Button>
      <Button className="CloseBut" onClick={() => 
      {setModal4(false); setUpdateSuccess(null);
      setError(null)
      }}> Close </Button>
    </div>
  </Form>
  </center>

 </Modal>
 
{/* END OF MODAL SETUP */}

      <h1> <center> Profile Page </center> </h1>
    
            <div style={{marginLeft: '25%', marginTop: '0px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={4} fontFamily="verdana"> 
                   
                        <Box color="black" bgcolor="white" p={0} fontFamily="verdana"> <b>Credentials</b> </Box>
                   
                       
                        <Box p={1}> </Box>
                      
                       
                       <td> <b>Name:</b> <br />{newInfo.name} </td>

                    <td> <Box p={0} fontFamily="verdana"> <Button className="nameButton" variant="light" onClick={() => setModalIsOpen(true)}> + Edit your name </Button> </Box> </td>
                   
                    <Box p={1}> </Box>
                 
                     <Box p={0}> Joined in: {formattedDate} </Box>  
                  
   
                </Box>
                </div>

                <div style={{marginLeft: '25%', marginTop: '35px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>
                    
                   <b>Account Options:</b>
                   <Box p={1}> </Box>
                  
                    <td> 
                   <Box> 
                      
                       <b>Language:</b> <select name="language" id="lang">
                            <option value="" disabled selected hidden>Select Option</option>
                            <option value="engUS">English (US)</option>
                            <option value="engUK">English (UK)</option>
                          
                            </select></Box>
      
                    </td> 
                    <Box p={1}> </Box>
                   <td>            
                <Box> <b>Time Zone:</b>   
                            <select name="gmt" id="time">
                            <option value="" disabled selected hidden> (GMT +8:00) Philippines / Singapore </option>
                            <option value="gmt+8">(GMT +8:00) Philippines / Singapore</option>
                            </select>
                          
                            </Box>
  
                          </td>
                    <Box p={1}> </Box>
                    <td>
          
                        <Box> <b>Change your password?</b> <Button className="passChange" variant="light" onClick={() => setModal1(true)}> Edit </Button></Box>
                        </td>
                       
                        <Box p={1}> </Box> 
            
                        <Box> <b>Employee roles</b> <Button className="roles" variant="light" onClick={() => setModal4(true)}> Select Roles </Button></Box>
                        
                </Box>

       
            </div>
            <div style={{marginLeft: '51%', marginTop: '-589px', width: '25%'}} className="text">
            
                <Box color="black" bgcolor="White" p={5}>   
                <td> 
                    <b>Addresses:</b>
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Box><Button className="submitButton" variant="light" onClick={() => setModal3(true)}> + Add a home address? </Button> </Box>
                    
                </Box>
    
            </div>
            <div style={{marginLeft: '51%', marginTop: '42px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    <b>Email Addresses:</b> 
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Button className="submitButton" variant="light" onClick={() => setModal5(true)}> + Add another email address? </Button>
                   
                    
                </Box>
      
            </div>

            <div style={{marginLeft: '51%', marginTop: '40px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    <b>Phone Numbers:</b>
                    
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
