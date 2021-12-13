import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import Clock from '../components/Clock';

const Navbar = () => {
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const userInfo = localStorage.getItem('userInfo');
    const newInfo = JSON.parse(userInfo);



    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <header>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            <nav>
                <ul className="time">
                <li><h2 className="clock"><Clock /></h2></li>
                </ul>
            </nav>

            <a className="brand-name" href="/#">Luie Jeans</a>
        </header>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>  

                        <li className="nav-text" style={{paddingLeft:"60px"}}>
                            <img src={newInfo.pic} style={{width:"70px", height:"60px",
                             borderRadius:"50%", border:"2px white solid"}}
                             alt="userImage"/>
                        </li>

                        <li className="nav-text" style={{color:"white", paddingLeft:"10px"}}>
                            <b>Hello, {newInfo.name}!</b>
                        </li>


                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} id={item.id} onClick={()=>{
                                if(item.id){
                                localStorage.removeItem("userInfo");
                                }
                            }}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}  
                </ul>  
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
