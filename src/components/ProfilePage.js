import React, { useState } from 'react'
import './ProfilePage.js'
import Box from '@material-ui/core/Box';


function ProfilePage() {
   
    return (

        <div className="background">
           <h1> Profile Page </h1>
    
            <div style={{marginLeft: '25%', marginTop: '35px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={4} fontFamily="verdana"> 
                   
                        <Box color="black" bgcolor="white" p={0} fontFamily="verdana"> Credentials </Box>
                   
                       
                        <Box p={1}> </Box>
                      
                       
                       <td> Name: </td>

                    <td> <Box p={0} fontFamily="verdana"> <button className="nameButton" > + Edit your name </button> </Box> </td>
                   
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
                            <option value="option1">Select Option</option>
                            <option value="engUS">English (US)</option>
                            <option value="engUK">English (UK)</option>
                          
                            </select></Box>
                            
                            
                
                    </td> 
                    <Box p={1}> </Box>
                   <td>            
                <Box> Time Zone:   
                            <select name="gmt" id="time">
                            <option value="gmt+7">(GMT +7:00) Cambodia / Indonesia</option>
                            <option value="gmt+8">(GMT +8:00) Philippines / Singapore</option>
                            <option value="gmt+9">(GMT +9:00) Korea / Japan</option>
                          
                            </select>
                          
                            </Box>
                      
                          

                          </td>
                    <Box p={1}> </Box>
                    <td>
                    <Box>
                        Transaction Logs
                        <button className="transact" > View Transactions </button>

                    </Box>
                    <Box p={1}> </Box>
                   
                        </td>
                    <Box p={1}> </Box>
                        <Box> <button className="Featmis"> Feature missing? </button> Contact us and let us know what needs to be improved!</Box>
                </Box>
                
            
            </div>
            <div style={{marginLeft: '51%', marginTop: '-531px', width: '25%'}} className="text">
            
                <Box color="black" bgcolor="White" p={5}>   
                <td> 
                    Addresses:
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <Box><button className="submitButton"> + Add a home address? </button> </Box>
                    
                </Box>
               
               
               
                
            
            </div>
            <div style={{marginLeft: '51%', marginTop: '34px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Email Addresses: 
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <button className="submitButton"> + Add another email address? </button>
                   
                    
                </Box>
               
                
            
            </div>

            <div style={{marginLeft: '51%', marginTop: '40px', width: '25%'}} className="text">
                <Box color="black" bgcolor="White" p={5}>   
                <td>
                    Phone Numbers:
                    
                    <Box p={1}> </Box>
                    </td> 
                    <Box p={1}> </Box>
                    <button className="submitButton"> + Add another phone number? </button>
                  
                    
                </Box>
               
                
            
            </div>

            <div style={{marginLeft: '0%', marginTop: '140px', width: '0%'}} className="text">
                <Box color="black" bgcolor="White" p={1}>
                </Box>
            
            </div>
      
  
            <footer> 
            <h6> <center> COPYRIGHT LuieJeans™ © 2021. ALL RIGHTS RESERVED. </center> </h6>
            </footer>
        </div>
        
        
    )
    
    

}

export default ProfilePage


