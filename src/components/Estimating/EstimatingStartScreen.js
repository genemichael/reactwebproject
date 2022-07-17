import React, { useState } from 'react'
import { 
    Container, 
    Row,
    RowProps,
    Col,
    ColProps,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap'

const EstimatingStartScreen = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <div className="d-flex p-5">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret>
                What are we making today?
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    Digital Print
                </DropdownItem>
                <DropdownItem>
                    Litho Print
                </DropdownItem>
                <DropdownItem>
                    Screen - T-Shirt
                </DropdownItem>
                <DropdownItem>
                    Screen/Letterpress Flatstock
                </DropdownItem>
                <DropdownItem>
                    Non-print
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default EstimatingStartScreen