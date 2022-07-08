import React from 'react'
import { slide as Menu } from 'react-burger-menu';

const SideBar = props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/system">
                System
            </a>

            <a className="menu-item" href="./Estimating/EstimatingPage">
                Estimating
            </a>

            <a className="menu-item" href="/orderEntry">
                Order Entry
            </a>

            <a className="menu-item" href="/S=scheduling">
                Scheduling
            </a>

            <a className="menu-item" href="/purchasing">
                Purchasing
            </a>
            <a className="menu-item" href="/inventory">
                Inventory
            </a>
            <a className="menu-item" href="/Production">
                Production
            </a>
            <a className="menu-item" href="/shipping">
                Shipping and Receiving
            </a>
            <a className="menu-item" href="/invoicing">
                Invoicing
            </a>
            <a className="menu-item" href="/costing">
                Costing
            </a>
            <a className="menu-item" href="/reports">
                Reports
            </a>
            <a className='menu-item' href='/help'>
                Help
            </a>
        </Menu>
    );
};

export default SideBar;

