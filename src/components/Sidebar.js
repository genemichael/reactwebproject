import React from 'react'
import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu';

const SideBar = props => {
    return (
        <Menu>
            <Link to="/">Home</Link>

            <Link to="/system">
                System
            </Link>

            <Link to="./Estimating/EstimatingNav">
                Estimating
            </Link>

            <Link to="./orderEntry">
                Order Entry
            </Link>

            <Link to="./scheduling">
                Scheduling
            </Link>

            <Link to="./purchasing">
                Purchasing
            </Link>
            <Link to="./inventory">
                Inventory
            </Link>
            <Link to="./production">
                Production
            </Link>
            <Link to="./shipping">
                Shipping and Receiving
            </Link>
            <Link to="./invoicing">
                Invoicing
            </Link>
            <Link to="./costing">
                Costing
            </Link>
            <Link to="./reports">
                Reports
            </Link>
            <Link to='./help'>
                Help
            </Link>
        </Menu>
    );
};

export default SideBar;
