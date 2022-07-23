import React from 'react'
import { Nav, NavLink, NavItem, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked, faCalendarCheck, faCalendarDays, faCaravan, faChartLine, faDumpsterFire, faEraser, faListCheck, faPeopleCarryBox, faPersonCircleQuestion, faReceipt, faShop, faTruckPlane, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { slide as Menu } from 'react-burger-menu'

const VerticalNavigation = () => {
  return (
    <Menu>
    
    <Nav
    tabs
    vertical
    >
        <NavItem>
            <NavLink
                active
                href='../Home.js'
                >
                    <FontAwesomeIcon icon={faCaravan} /> Home
                </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            active
            href='#'
            >
                <FontAwesomeIcon icon={faUserAstronaut} /> System
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='../Estimating/EstimatingNav.js'>
                <FontAwesomeIcon icon={faEraser} /> Estimating
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faListCheck} /> Order Entry
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faCalendarDays} /> Scheduling
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faPeopleCarryBox} /> Production
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faBoxesStacked} /> Inventory
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faTruckPlane} /> Shipping / Receiving
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faShop} /> Purchasing and AP
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faReceipt} /> Invoicing
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faDumpsterFire} /> Costing
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faChartLine} /> Reports
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            active
            href='#'>
                <FontAwesomeIcon icon={faPersonCircleQuestion} /> Help
            </NavLink>
        </NavItem>
    </Nav>
    </Menu>
  )
}

export default VerticalNavigation