import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path: '/landing-page',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title:'Account',
        path: '/account',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },

    {
        title:'Order History',
        path: '/order-history',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {
        title:'Staff',
        path: '/staff',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },

    {
        title:'Customer',
        path: '/customer',
        icon: <IoIcons.IoIosBody />,
        cName: 'nav-text'
    },

    {
        title:'Order Status',
        path: '/order-status',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',

    },

    {
        title:'Logout',
        path: '/',
        icon: <IoIcons.IoIosLogOut />,
        cName: 'nav-text',
        id: 'logoutBtn'
    },
]
